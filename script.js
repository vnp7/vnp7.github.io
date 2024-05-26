import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBKk0b2-Dr2IkiiSObJdxdKiNaHRCQMmzo",
    authDomain: "patel-holdings.firebaseapp.com",
    projectId: "patel-holdings",
    storageBucket: "patel-holdings.appspot.com",
    messagingSenderId: "703106012824",
    appId: "1:703106012824:web:9a51ca849e006fa41fa2ed",
    measurementId: "G-N3KFG5C1ZL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

document.getElementById('auth-form').addEventListener('submit', signIn);

function signIn(event) {
    event.preventDefault(); // Prevent the default form submission

    const email = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log('User signed in:', user);

            // Redirect to another page or perform other actions
            window.location.href = 'https://bba
