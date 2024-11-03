import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDxYWPrZuQdRF_uRwYoPb7QEzpFv6z_yBc",
  authDomain: "vuex-blog-f41eb.firebaseapp.com",
  projectId: "vuex-blog-f41eb",
  storageBucket: "vuex-blog-f41eb.firebasestorage.app",
  messagingSenderId: "606676777724",
  appId: "1:606676777724:web:9123a769c1076fc2c83579",
};

initializeApp(firebaseConfig);

const auth = getAuth();

export { auth };
