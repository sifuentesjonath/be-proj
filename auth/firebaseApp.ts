import { initializeApp } from 'firebase/app';
import firebaseConfiguration from '@config/firebase';

// Initialize Firebase
export const app = initializeApp(firebaseConfiguration);
if(app) console.log('[FIREBASE]: initialized');