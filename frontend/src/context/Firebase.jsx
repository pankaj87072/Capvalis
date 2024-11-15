import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, setPersistence, browserLocalPersistence, signOut } from 'firebase/auth';
import { getDatabase, set, ref, get, update } from 'firebase/database';
import { getDocs, getFirestore } from 'firebase/firestore';
import { collection, addDoc, doc, getDoc, updateDoc, query, where } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_ApiKey,
    authDomain: process.env.REACT_APP_AuthDomain,
    projectId: process.env.REACT_APP_ProjectId,
    storageBucket: process.env.REACT_APP_StorageBucket,
    messagingSenderId: process.env.REACT_APP_MessagingSenderId,
    appId: process.env.REACT_APP_AppId,
    measurementId: process.env.REACT_APP_MeasurementId,
    databaseURL: process.env.REACT_APP_Database
};

const firebaseapp = initializeApp(firebaseConfig);
const firebaseRegisterauth = getAuth(firebaseapp);
const firebasedatabase = getDatabase(firebaseapp);
const firebasestore = getFirestore(firebaseapp);

const FirebaseContext = createContext(null);

export default FirebaseContext;
export const useFirebase = () => useContext(FirebaseContext);

export const FireBaseProvider = (props) => {
    const [logedin, setLogedin] = useState(false);
    const [keeploggedin, setLoggedin] = useState(false);
    const [createdreferaal, setCreated] = useState(false);

    const handleFirebaseStoreStorage = async (nameis, email, referralData, usedReferralCode = null) => {
        try {
            // Create new user document
            const userDocRef = await addDoc(collection(firebasestore, "usersdetail"), {
                Name: nameis,
                Email: email,
                ReferralId: referralData,
                ReferralCount: 0,
                UsedReferralCode: usedReferralCode,
                HasPaid: false,
                PaymentVerified: false
            });

            // If user used a referral code, store it for verification after payment
            if (usedReferralCode) {
                const referralQuery = query(
                    collection(firebasestore, "usersdetail"),
                    where("ReferralId", "==", usedReferralCode)
                );
                const querySnapshot = await getDocs(referralQuery);
                
                if (!querySnapshot.empty) {
                    // Store the relationship for later verification
                    await addDoc(collection(firebasestore, "pendingReferrals"), {
                        referrerCode: usedReferralCode,
                        newUserId: userDocRef.id,
                        timestamp: new Date(),
                        isVerified: false
                    });
                }
            }

            setCreated(true);
            return userDocRef.id;
        } catch (error) {
            console.error("Error storing user data:", error);
            throw error;
        }
    };

    const verifyPaymentAndUpdateReferral = async (userId) => {
        try {
            // Get user document
            const userDoc = await getDoc(doc(firebasestore, "usersdetail", userId));
            const userData = userDoc.data();
            
            if (!userData.HasPaid || userData.PaymentVerified) {
                return; // Skip if payment not made or already verified
            }

            // If user used a referral code
            if (userData.UsedReferralCode) {
                // Find the referrer
                console.log(userData.usedReferralCode);
                const referralQuery = query(
                    collection(firebasestore, "usersdetail"),
                    where("ReferralId", "==", userData.UsedReferralCode)
                );
                const querySnapshot = await getDoc(referralQuery);

                if (!querySnapshot.empty) {
                    const referrerDoc = querySnapshot.docs[0];
                    const referrerData = referrerDoc.data();
                    // Update referrer's count
                    await updateDoc(doc(firebasestore, "usersdetail", referrerDoc.id), {
                        ReferralCount: (referrerData.ReferralCount || 0) + 1
                    });

                    // Mark the referral as verified
                    await updateDoc(doc(firebasestore, "usersdetail", userId), {
                        PaymentVerified: true
                    });

                    // Update pending referral status
                    const pendingReferralQuery = query(
                        collection(firebasestore, "pendingReferrals"),
                        where("newUserId", "==", userId)
                    );
                    const pendingSnapshot = await getDocs(pendingReferralQuery);
                    if (!pendingSnapshot.empty) {
                        await updateDoc(doc(firebasestore, "pendingReferrals", pendingSnapshot.docs[0].id), {
                            isVerified: true
                        });
                    }
                }
            }
        } catch (error) {
            console.error("Error verifying payment and updating referral:", error);
            throw error;
        }
    };

    const updatePaymentStatus = async (userId, paymentStatus) => {
        try {
            await updateDoc(doc(firebasestore, "usersdetail", userId), {
                HasPaid: paymentStatus
            });

            if (paymentStatus) {
                await verifyPaymentAndUpdateReferral(userId);
            }
        } catch (error) {
            console.error("Error updating payment status:", error);
            throw error;
        }
    };
 // it is giving error of docs rather than collection
    const validateReferralCode = async (referralCode) => {
        try {
            console.log("referral id is: ",referralCode);
            const referralQuery = query(
                collection(firebasestore, "usersdetail"),
                where("ReferralId", "==", referralCode)
            );
            const querySnapshot = await getDocs(referralQuery);
            // querySnapshot.forEach((e)=>{
            //   console.lof("the referralid is ",e);   
            // })
            return !querySnapshot.empty;
        } catch (error) {
            console.error("Error validating referral code:", error);
            return false;
        }
    };

    // ... existing code ...
    const registerwithfirebase = (email, password) => {
        return createUserWithEmailAndPassword(firebaseRegisterauth, email, password);
    };

    const siginwithfirebase = async (email, password) => {
        try {
            await setPersistence(firebaseRegisterauth, browserLocalPersistence);
            return signInWithEmailAndPassword(firebaseRegisterauth, email, password);
        } catch (error) {
            console.log("Error in sign-in:", error);
            throw error;
        }
    };

    const putdataindatabase = (key, data) => {
        set(ref(firebasedatabase, key), data);
    };

    useEffect(() => {
        onAuthStateChanged(firebaseRegisterauth, (user) => {
            if (user) {
                setLoggedin(true);
            } else {
                setLoggedin(false);
            }
        });
    }, []);

    const checkloginornot = (islogin) => {
        if (islogin) {
            setLogedin(true);
        } else {
            setLoggedin(false);
        }
    };

    const signout = () => {
        signOut(firebaseRegisterauth);
    };

    return (
        <FirebaseContext.Provider value={{
            registerwithfirebase,
            putdataindatabase,
            siginwithfirebase,
            checkloginornot,
            logedin,
            keeploggedin,
            signout,
            handleFirebaseStoreStorage,
            setCreated,
            validateReferralCode,
            updatePaymentStatus,
            verifyPaymentAndUpdateReferral
        }}>
            {props.children}
        </FirebaseContext.Provider>
    );
};