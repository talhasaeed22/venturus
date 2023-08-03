import React, { useState } from 'react'
import { auth } from '@/FirebaseConfig';
import { GoogleAuthProvider, FacebookAuthProvider, signInWithPopup, updateProfile, createUserWithEmailAndPassword } from "firebase/auth";
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useRouter } from 'next/router';
import { Height } from '@mui/icons-material';
import Alert from '@/components/Modal/Alert';
import { useLocalStorage } from '@/hooks/useLocalStorage';

const SignUp = () => {
    const router = useRouter()
    const [localUser, setLocalUser] = useLocalStorage('localUser', "");

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const [emailEntered, setEmailEntered] = useState(false)
    const [message, setMessage] = useState("");
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [user, setUser] = useState({
        email: "",
        password: "",
      });
      const onchange = (e) => {
        setUser({ ...user, [e.currentTarget.name]: e.currentTarget.value });
      };

      const handleSignup = async (e) => {
        if(user.email !== '' || user.password !== ''){
            e.preventDefault();
        setIsLoading(true);
        const Newuser = await createUserWithEmailAndPassword(
          auth,
          user.email,
          user.password
        )
          .then((userCred) => {
            setIsLoading(false);
            setLocalUser(result.user)
            // localStorage.setItem("user" , result.user)
            router.push("/");
          })
          .catch((error) => {
            if (error.code === "auth/email-already-in-use") {
              setMessage("That email address is already in use!");
              setError(true)
            } else if (error.code === "auth/invalid-email") {
              setMessage("That email address is invalid!");
              setError(true)
            } else if (error.code === "auth/wrong-password") {
              setMessage("Please Enter Valid Credentials");
              setError(true)
            } else if (error.code === "auth/weak-password") {
              setMessage("Please Enter Valid Credentials");
              setError(true)
            } else {
              setError(true)
              setMessage(error.code);
            }
            setError(true);
            setIsLoading(false);
          });
        }else{
            setMessage("Fill all the fields!");
            setError(true)
        }
      };

    const handleGoogleSignup = async (e) => {
        e.preventDefault();
        const googleProvider = new GoogleAuthProvider();
        await signInWithPopup(auth, googleProvider)
            .then((result) => {
                router.push("/");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleFacebookSignin = async (e)=>{
        e.preventDefault();
        const facebookProvider = new FacebookAuthProvider();
        await signInWithPopup(auth, facebookProvider)
        .then((result) => {
            router.push("/");
        })
        .catch((err) => {
            console.log(err);
        });
    }
    return (
        <div className='h-screen flex justify-center px-4 items-center'>
            <div className='flex flex-col gap-5  sm:w-[25rem] w-full rounded-[1rem]' style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 24px 48px', padding: "2.375rem 2rem 3rem", border: '1px solid transparent', }}>
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-[1.25rem] font-[600]'>Create your account</h1>
                    <span className='text-[#000000a6] text-center text-[1rem] font-[400]'>to continue to AI business reports</span>
                </div>

                <div className="grid grid-cols-2 self-center gap-5">
                    <div onClick={handleGoogleSignup} className='p-4 border flex items-center cursor-pointer hover:bg-gray-100 justify-center bg-white  rounded-xl w-[80px] min-w-[80px]'>
                        <img src='/images/google.svg' alt="logo" className='w-fit' />
                    </div>
                    <div onClick={handleFacebookSignin} className='p-4 flex items-center cursor-pointer hover:bg-gray-100 border bg-white justify-center  rounded-xl w-[80px] min-w-[80px]'>
                        <img src='/images/facebook.svg' alt="logo" className='w-fit' />
                    </div>
                </div>

                <div className='flex justify-between self-center gap-5 items-center mt-5'>
                    <div className='border sm:w-[140px] w-[90px]  border-[#00000029]' />
                    <span className='text-[#4D4D4D] font-normal text-[12px]'>or</span>
                    <div className='border sm:w-[140px] w-[90px]  border-[#00000029]' />
                </div>

                <div className='flex flex-col'>
                    <span className='text-sm'>Email Address</span>
                    <input onChange={onchange} value={user.email} type="email" name="email" id="email" className='py-[0.625rem] px-[1rem] w-full rounded-[0.375rem] border outline-none border-[#00000029]' />
                </div>

                {/* <div className='flex flex-col'>
                    <span className='text-sm'>Pasword</span>
                    <input type="password" name="password" id="password" className='py-[0.625rem] px-[1rem] w-full rounded-[0.375rem] border outline-none border-[#00000029]' />
                </div> */}

                <FormControl sx={{ width: '100%', }} variant="outlined">
                    <span className='text-sm'>Password</span>

                    {/* <FormHelperText id="outlined-weight-helper-text">Password</FormHelperText> */}
                    {/* <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel> */}
                    <OutlinedInput
                        name='password'
                        value={user.password}
                        onChange={onchange}
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        sx={{ height: '40px', marginTop: '0px', paddingTop: "0px" }}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label=""
                    />

                </FormControl>

                <button onClick={handleSignup} className='bg-[#103FEF] hover:bg-[#0D33BF] min-h-[2.25rem] rounded-[0.375rem] text-white font-[600]' style={{ fontSize: '12px' }}>CONTINUE</button>

                <div>
                    <span className='text-sm text-[#000000a6]'>Have an account? <span onClick={()=>{router.push('/sign-in')}} className='text-[#103fef] hover:underline cursor-pointer'>Signin</span></span>
                </div>

            </div>

            {error && <Alert message={message} setError={()=>{setError(false)}} />}
        </div>
    )
}

export default SignUp
