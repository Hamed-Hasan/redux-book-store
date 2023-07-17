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



    // const firebaseConfig = {
    //   apiKey: import.meta.env.REACT_APP_API_KEY,
    //   authDomain: import.meta.env.REACT_APP_AUTH_DOMAIN,
    //   projectId: import.meta.env.REACT_APP_PROJECT_ID,
    //   storageBucket: import.meta.env.REACT_APP_STORAGE_BUCKET,
    //   messagingSenderId: import.meta.env.REACT_APP_MESSAGE_SENDER_ID,
    //   appId: import.meta.env.REACT_APP_APP_ID,
    // };
    // VITE




    apiKey: "AIzaSyASd6GX8t-grqn1gNiij7aJfPtzW9gjxEk",
  authDomain: "book-store-a1918.firebaseapp.com",
  projectId: "book-store-a1918",
  storageBucket: "book-store-a1918.appspot.com",
  messagingSenderId: "62468512286",
  appId: "1:62468512286:web:5ea59ef5776b7428deec0f"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


