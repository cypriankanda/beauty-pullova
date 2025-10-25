import { initializeApp } from "firebase/app";
import { getFunctions, httpsCallable, HttpsCallableResult } from "firebase/functions";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTBPWMJIJsEcwnSPL1EW0FhrE1DN7T8fY",
  authDomain: "pullova-beauty.firebaseapp.com",
  projectId: "pullova-beauty",
  storageBucket: "pullova-beauty.firebasestorage.app",
  messagingSenderId: "67327100349",
  appId: "1:67327100349:web:f291809093001b2a843ed4",
  measurementId: "G-1WDKGW8C38"
};

// 1. Define the input and output types for our function
export interface WaitlistRequest {
    email: string;
}

export interface WaitlistResponse {
    success: boolean;
    message: string;
}

// 2. Initialize the Firebase client app
const app = initializeApp(firebaseConfig);
const functionsInstance = getFunctions(app);

// 3. Create the callable function client wrapper with explicit types
export const joinWaitlistFunction = httpsCallable<WaitlistRequest, WaitlistResponse>(
    functionsInstance, 
    'joinWaitlist'
);

export { app };
