import React, { useEffect, useState } from 'react';
import {useFirebase} from '../context/Firebase'
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
// import {uid}
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
    // console.log(firebase);
    const [isLogin, setIsLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    // const [isLoginSuccess,setIsLoginSucess]=useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        Referral:''
    });
    const navigate=useNavigate();
const handlereferraluniqueid=()=>{
    const newuniqueid=uuidv4();
      console.log(newuniqueid);
}
    // console.log(formData);
//     const [users,setUsers]=useState(null);
//   useEffect((user)=>{
//   firebase.keeploggedin(user)
//   },[])
// const handlereturningtohomepageafterlogin=()=>{
//     {isLoginSuccess? navigate('/home') : navigate('/Login')}
// }
// handlereturningtohomepageafterlogin();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        // Basic validation
        if (!formData.email || !formData.password) {
            setError('Please fill in all fields');
            setLoading(false);
            return;
        }

        if (!isLogin && formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            setLoading(false);
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setError('Please enter a valid email address');
            setLoading(false);
            return;
        }

        // Password validation for registration
        if (!isLogin && formData.password.length < 8) {
            setError('Password must be at least 8 characters long');
            setLoading(false);
            return;
        }

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setLoading(false);
        // Here you would typically make your actual API call
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
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
                        {!isLogin  &&  (
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="Referral "
                                label="Referral"
                                type="text"
                                id="Referral"
                                value={formData.Referral}
                                // onChange={handleChange}
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
                            onClick={isLogin?()=>{firebase.siginwithfirebase(formData.email,formData.password).then(()=>{
                                console.log("login successful");firebase.checkloginornot(true);navigate('/')}).catch((err)=>{firebase.checkloginornot(false);console.log("Error: "+err)})}:()=> {firebase.registerwithfirebase(formData.email,formData.password);
                                console.log(formData.email,formData.password,formData.confirmPassword)}}
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
                        <Button onClick={handlereferraluniqueid}>Click Me</Button>
                    </Box>
                </Paper>
            </Box>
        </Container>
        </div>
    );
};
export default Login
