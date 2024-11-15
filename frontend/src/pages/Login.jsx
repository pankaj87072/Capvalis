import React, { useEffect, useState } from 'react';
import { useFirebase } from '../context/Firebase';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import {
    Container,
    Paper,
    Typography,
    TextField,
    Button,
    Box,
    IconButton,
    Alert,
    CircularProgress,
    InputAdornment
} from '@mui/material';
import {
    Visibility,
    VisibilityOff,
    Email,
    Lock
} from '@mui/icons-material';

const Login = () => {
    const firebase = useFirebase();
    const navigate = useNavigate();
    
    const [isLogin, setIsLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [referralData, setReferralData] = useState(null);
    const [referralError, setReferralError] = useState('');
    const [allok,setAllok]=useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        referralCode: ''
    });
    const handleReferralUniqueid = () => {
        const newuniqueid = uuidv4().substring(0, 5);
        console.log(newuniqueid);
        setReferralData(newuniqueid);
        console.log(referralData);
        setAllok(true);
    };

    const validateReferralCode = async () => {
        if (!formData.referralCode) return true; 
        const isValid = await firebase.validateReferralCode(formData.referralCode);
        if (!isValid) {
            setReferralError('Invalid referral code');
            return false;
        }
        setReferralError('');
        return true;
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            // Basic validation
            if (!formData.email || !formData.password) {
                throw new Error('Please fill in all fields');
            }

            if (!isLogin) {
                if (formData.password !== formData.confirmPassword) {
                    throw new Error('Passwords do not match');
                }

                if (formData.password.length < 8) {
                    throw new Error('Password must be at least 8 characters long');
                }

                // Validate referral code if provided
                const isValidReferral = await validateReferralCode();
                if (!isValidReferral) {
                    throw new Error('Invalid referral code');
                }
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                throw new Error('Please enter a valid email address');
            }
            if (isLogin) {
                // Handle login
                await firebase.siginwithfirebase(formData.email, formData.password);
                firebase.checkloginornot(true);
                navigate('/');
            }else{
                // Handle registration
                if(allok){
                const userCredential = await firebase.registerwithfirebase(formData.email, formData.password);
                // Store user details with referral information
                await firebase.handleFirebaseStoreStorage(
                    formData.names,
                    formData.email,
                    referralData,
                    formData.referralCode || null
                );
                console.log("succesful");
                // firebase.checkloginornot(true);
                // navigate('/');
            }else{
                console.log('try again any error occured');
            }
            }
        } catch (error) {
            console.error("Error:", error);
            setError(error.message);
            firebase.checkloginornot(false);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (e.target.name === 'referralCode') {
            setReferralError('');
        }
    };
    return (
        <div className='h-screen w-full flex justify-center items-center bg-black'>
        <Container className='border-x-slate-200'  component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Paper elevation={3} sx={{ p: 4, width: '100%' }}>
                    <Typography component="h1" variant="h5" align="center" gutterBottom>
                        {isLogin ? 'Login' : 'Register'}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 3 }}>
                        {isLogin
                            ? 'Welcome back! Please login to your account'
                            : 'Create an account to get started'}
                    </Typography>

                    {error && (
                        <Alert severity="error" sx={{ mb: 2 }}>
                            {error}
                        </Alert>
                    )}

                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                    {!isLogin && (
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="names"
                                label="name"
                                type="text"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Lock />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        )}
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value={formData.email}
                            onChange={handleChange}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Email />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            autoComplete="current-password"
                            value={formData.password}
                            onChange={handleChange}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Lock />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={() => setShowPassword(!showPassword)}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />

                        {!isLogin && (
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="confirmPassword"
                                label="Confirm Password"
                                type="password"
                                id="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Lock />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        )}
                       {!isLogin && (
                        <TextField
                            margin="normal"
                            fullWidth
                            name="referralCode"
                            label="Referral Code (Optional)"
                            type="text"
                            value={formData.referralCode}
                            onChange={handleChange}
                            error={!!referralError}
                            helperText={referralError}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Lock />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    )}

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            disabled={loading}
                            onClick={handleReferralUniqueid}
                            // onClick={isLogin?()=>{firebase.siginwithfirebase(formData.email,formData.password).then(()=>{
                            //     console.log("login successful");firebase.checkloginornot(true);navigate('/')}).catch((err)=>{firebase.checkloginornot(false);console.log("Error: "+err)})}:()=> {firebase.registerwithfirebase(formData.email,formData.password).then(()=>{firebase.handleFirebaseStoreStorage(formData.names,formData.email,referralData);});
                            //     console.log(formData.email,formData.password,formData.confirmPassword)}}
                        >
                            {loading ? (
                                <CircularProgress size={24} color="inherit" />
                            ) : (
                                isLogin ? 'Login' : 'Register'
                            )}
                        </Button>
                        <Button
                            fullWidth
                            variant="text"
                            onClick={() => {
                                setIsLogin(!isLogin);
                                setError('');
                                setFormData({ email: '', password: '', confirmPassword: ''});
                            }}
                        >
                            {isLogin
                                ? "Don't have an account? Register"
                                : "Already have an account? Login"}
                        </Button>
                    </Box>
                </Paper>
            </Box>
        </Container>
        </div>
    );
};
export default Login
