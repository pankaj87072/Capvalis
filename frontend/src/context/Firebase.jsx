import { createContext, useContext, useEffect, useState } from "react";
import {initializeApp, } from 'firebase/app'
import {getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword, onAuthStateChanged,setPersistence,browserLocalPersistence,signOut} from 'firebase/auth';
import {getDatabase,set,ref} from 'firebase/database'
// import { useNavigate } from 'react-router-dom';
// import { log } from "console";
// import { error } from "console";
//Intialsing the firebase
const firebaseConfig = {
    apiKey: "AIzaSyCdal-vAFloREhrc2wH2FVy8eT3exQIGlQ",
    authDomain: "capvalis-30f56.firebaseapp.com",
    projectId: "capvalis-30f56",
    storageBucket: "capvalis-30f56.firebasestorage.app",
    messagingSenderId: "869145988367",
    appId: "1:869145988367:web:e904d1126148a32e05427a",
    measurementId: "G-0XFE0RGV9G",
    database:"https://capvalis-30f56-default-rtdb.firebaseio.com"
  };
const firebaseapp=initializeApp(firebaseConfig);
const firebaseRegisterauth=getAuth(firebaseapp);
const firebasedatabase=getDatabase(firebaseapp);
const FirebaseContext=createContext(null);
export default FirebaseContext;
export const useFirebase=()=>useContext(FirebaseContext);
export const FireBaseProvider= (props)=>{
    const [logedin,setLogedin]=useState(false);
    const [keeploggedin,setLoggedin]=useState(false);
     const registerwithfirebase= (email,password)=>{
        
        return createUserWithEmailAndPassword(firebaseRegisterauth, email,password);
     }

     const siginwithfirebase = async (email,password)=>{
        try {
            await setPersistence(firebaseRegisterauth, browserLocalPersistence);
            return signInWithEmailAndPassword(firebaseRegisterauth, email, password);
        } catch (error) {
            console.log("Error in sign-in:", error);
            throw error;
        }
     }
    const putdataindatabase= (key,data)=>{
        set(ref(firebasedatabase, key),data);
     }
  useEffect(()=>{
        onAuthStateChanged(firebaseRegisterauth,(user)=>{
            if(user){ 
              setLoggedin(true);
            }else{
                setLoggedin(false);
            }
            // else console.log("user is not logged in");
        })
     },[]);
       console.log("i am in firbasejsx:",keeploggedin);
     const checkloginornot=(islogin)=>{
        if(islogin){
        setLogedin(true);
        }else{
            setLogedin(false);
        }
     }
     const signout=()=>{
        signOut(firebaseRegisterauth);
      }
      const [referral,setReferral]=useState(null);
    return (
        <FirebaseContext.Provider value={{registerwithfirebase,putdataindatabase,siginwithfirebase,checkloginornot,logedin,keeploggedin,signout}}>
            {props.children}
        </FirebaseContext.Provider>
    )
}