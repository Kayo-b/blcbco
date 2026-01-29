import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCn3ryIKdcqqyiv2LSaS2xrQOGj5z6tvxg",
  authDomain: "balacobacoberlin.firebaseapp.com",
  projectId: "balacobacoberlin",
  messagingSenderId: "1094334147439",
  appId: "1:1094334147439:web:80386bb83cb6d727dc969a"
};

const app = initializeApp(firebaseConfig);

export { app };
