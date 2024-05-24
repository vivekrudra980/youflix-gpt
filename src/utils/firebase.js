// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCicHtuAqBhv00F-zGBh5XepAIUns7ApEE',
  authDomain: 'youflixgpt-40d67.firebaseapp.com',
  projectId: 'youflixgpt-40d67',
  storageBucket: 'youflixgpt-40d67.appspot.com',
  messagingSenderId: '144414451800',
  appId: '1:144414451800:web:c81d829d6d6e46bf6d822d',
  measurementId: 'G-LN0PF4X0HC',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
