/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: "AIzaSyC3f9eirrAW-RzGDUl-URIEaSeim_dkjcM",
    // authDomain: "tech-net-36bcf.firebaseapp.com",
    // projectId: "tech-net-36bcf",
    // storageBucket: "tech-net-36bcf.appspot.com",
    // messagingSenderId: "136681171794",
    // appId: "1:136681171794:web:ce940e8ff3f2911059688b"
    apiKey: "AIzaSyAFQxo-DBq73hSTS6kj-G8nr9bCSSg15ik",
    authDomain: "book-store-2a359.firebaseapp.com",
    projectId: "book-store-2a359",
    storageBucket: "book-store-2a359.appspot.com",
    messagingSenderId: "844275240771",
    appId: "1:844275240771:web:f55ddd8244c4218c04e9f6"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


