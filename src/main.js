import { createApp } from "vue";
import App from "./App.vue";
import VueRouter from "./router/index.js";

import "bootstrap/dist/css/bootstrap.min.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFhuWWdLVwYXRYLR7QNNZbScgzfcILl5c",
  authDomain: "vite-project-3763a.firebaseapp.com",
  projectId: "vite-project-3763a",
  storageBucket: "vite-project-3763a.appspot.com",
  messagingSenderId: "545527838769",
  appId: "1:545527838769:web:b42c93e4b42100b8373d10",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

createApp(App).use(VueRouter).mount("#app");
