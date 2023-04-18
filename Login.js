
  // Import the functions you need from the SDKs you need
  //  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
  
  // https://firebase.google.com/docs/web/setup#available-libraries
  import {
        getAuth,
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
         } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";
         
  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDkkwiKho09JRaFvVZ-w_yYx_STbv-BAA4",
    authDomain: "ecommerce-website-4f259.firebaseapp.com",
    databaseURL: "https://ecommerce-website-4f259-default-rtdb.firebaseio.com",
    projectId: "ecommerce-website-4f259",
    storageBucket: "ecommerce-website-4f259.appspot.com",
    messagingSenderId: "863982693187",
    appId: "1:863982693187:web:b0c6a0b933b2aa70bd1df6"
  });


 const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();


// THE SIGNUP AND RETURN BUTTON
const signUpbtn = document.getElementById("signUp");
const returnBtn = document.getElementById("return-btn");
const main = document.getElementById("main");
const createacct = document.getElementById("create-acct");


signUpbtn.addEventListener("click", () => {
  main.style.display = "none";
  createacct.style.display = "block";
});

returnBtn.addEventListener("click", () => {
  main.style.display = "block";
  createacct.style.display = "none";
});

// THE LOGIN BUTTON IN THE NAV
const buttonn=document.getElementById("butt");
const login_container=document.querySelector('.login-container');

buttonn.addEventListener('click', () => {
  if(login_container.style.display === 'none'){
    login_container.style.display = 'block';
  }else{
    login_container.style.display = 'none';
  }
});



//sign in page
const emailInput=document.getElementById('email');
const passwordInput=document.getElementById("password");
const submitBtn=document.getElementById("submit");

// create account page 
const emailsignUp=document.getElementById("email-signup");
const passSignUp=document.getElementById("password-signup");
const emailsignUpcon=document.getElementById("confirm-email-signup");
const passSignUpcon=document.getElementById("confirm-password-signup");
const createAcctBtn=document.getElementById("create-acct-btn");

var email,
    password,
    signupEmail,
    signupPassword,
    confirmSignUpEmail,
    confirmSignUPPassword;

    createAcctBtn.addEventListener("click", ()=>{
        var isVerified = true;
        signupEmail=emailsignUp.value;
        confirmSignUpEmail=emailsignUpcon.value;
        if (signupEmail!=confirmSignUpEmail) {
            window.alert("Email fields don't match: Try Again ");
            isVerified=false;
        }

        signupPassword=passSignUp.value;
        confirmSignUPPassword=passSignUpcon.value;
        if ( signupPassword!=confirmSignUPPassword) {
           window.alert("Password fields dont match: try Again");
           isVerified=false; 
        }

        if (
            signupEmail==null||
            signupPassword==null||
            confirmSignUpEmail==null||
            confirmSignUPPassword==null
        ) {
           window.alert("Cannot Submit Empty Fields");
           isVerified=false; 
        }

        if (isVerified){
          createUserWithEmailAndPassword(auth,signupEmail, signupPassword).then(
            ()=> {
                window.alert("Account Successfully Created");
                window.location="./Home.html";
             }).catch((error) => {
              const errorCode = error.code;
                const errorMessage=error.message;
                window.alert(errorMessage);
             });
       
        }
       
    });

    submitBtn.addEventListener("click", ()=> {
        email = emailInput.value;
        password = passwordInput.value;

        signInWithEmailAndPassword(auth, email, password).then(
            () =>{
                window.alert("Login Successfull");
                window.location="./Home.html";
            }).catch((error) => {
                const errorMessage=error.message;
                window.alert(errorMessage);
             });
    });



