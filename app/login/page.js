'use client'
import { useState, useEffect } from "react"
import { auth } from "@/db/firebaseConfig"
import { signInWithRedirect, GoogleAuthProvider } from "firebase/auth"
import {useAuthState} from 'react-firebase-hooks/auth'
import GoogleButton from "react-google-button"
import { useRouter } from "next/navigation"


const Login = () => {
    const [user, loading] = useAuthState(auth);
    const [isRedirecting, setIsRedirecting] = useState(false);
    const router = useRouter();

    const googleSignIn = () => {
      const provider = new GoogleAuthProvider()
      setIsRedirecting(true);
      signInWithRedirect(auth, provider)
    }

    useEffect(() => {
      if (user) {
        router.push("/vocabulary");
      }
    }, [user, router]);

    if (isRedirecting || loading) {
      return (
        <div className="grid place-content-center min-h-screen">
          <div className="text-center">Redirecting...</div>
        </div>
      );
    }

  return (
    <div className="grid place-content-center min-h-screen">
        <GoogleButton onClick={googleSignIn}/>
    </div>
  )
}

export default Login