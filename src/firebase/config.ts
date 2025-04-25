import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Only initialize in the browser to avoid errors during SSR/Static Export
// Check for missing env vars
const missing = Object.entries(firebaseConfig).some(([_, v]) => !v);
if (missing && typeof window !== 'undefined') {
  // eslint-disable-next-line no-console
  console.error('❌ Firebase env vars missing – check Vercel Environment Variables');
}

const app =
  typeof window !== "undefined"
    ? !getApps().length
      ? initializeApp(firebaseConfig)
      : getApp()
    : undefined;

export const auth =
  typeof window !== "undefined" && app ? getAuth(app) : undefined;
