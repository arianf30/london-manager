import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyBr3UZKHlIVbFFcrBHtWD0y4DB9m49xZpI",
  authDomain: "london-manager.firebaseapp.com",
  databaseURL: "https://london-manager-default-rtdb.firebaseio.com",
  projectId: "london-manager",
  storageBucket: "london-manager.appspot.com",
  messagingSenderId: "69125843725",
  appId: "1:69125843725:web:4b59d76e1cd9b000dede44",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const dbFirestore = getDatabase(app)
