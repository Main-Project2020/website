document.addEventListener("DOMContentLoaded",event => {
    const app=firebase.app();

});

function googleLogin(){
   const provider = new firebase.auth.GoogleAuthProvider();

   firebase.auth().signInWithPopup(provider)
              .then(result => {
                  const user = result.user;
                  window.open("dashboard.html","_self");
                  console.log(user)
                 })
                  .catch(console.log)
}

var firebaseConfig = {
    apiKey: "AIzaSyAOBAjyWrkHVLnLrWiXwob7a_1Rn8-oovU",
    authDomain: "passhome-3b965.firebaseapp.com",
    databaseURL: "https://passhome-3b965.firebaseio.com",
    projectId: "passhome-3b965",
    storageBucket: "passhome-3b965.appspot.com",
    messagingSenderId: "83445695269",
    appId: "1:83445695269:web:aa6f3e03d7552ab88390cc",
    measurementId: "G-JKS1VLQSRG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  const auth=firebase.auth();

//Reference for form collection(3)

let formMessage = firebase.database().ref('register');




//listen for submit event//
document
.getElementById('registrationform')
.addEventListener('submit', formSubmit);
//Submit form
function formSubmit(e) {
  e.preventDefault();
  // Get Values from the DOM
  let name = document.querySelector('#name').value;
  let password = document.querySelector('#password').value;
  let email = document.querySelector('#email').value;

  //send message values
  sendMessage(name, email, password);

  //Show Alert Message
  

  //Hide Alert Message After Seven Seconds
  setTimeout(function() {document.querySelector('.alert').style.display = 'none';
  }, 7000);
 //Form Reset After Submission
  document.getElementById('registrationform').reset();

}

//Send Message to Firebase(4)
function sendMessage(name, email, password) {
  let newFormMessage = formMessage.push();
  newFormMessage.set({
    name: name,
    email: email,
    password: password,

  });
}

function signUp(){
   var email=document.getElementById("email");
   var password=document.getElementById("password");
   const promise=auth.createUserWithEmailAndPassword(email.value,password.value);
   promise.catch(e => alert(e.message));
   alert("signed up");
}


document
.getElementById('loginform')
.addEventListener('submit', formSub);
//Submit form
function formSub(e) {
  e.preventDefault();
  // Get Values from the DOM
  
  let formpassword = document.querySelector('#formpassword').value;
  let formemail = document.querySelector('#formemail').value;

  //send message values
  

  //Show Alert Message
  

  //Hide Alert Message After Seven Seconds
  setTimeout(function() {document.querySelector('.alert').style.display = 'none';
  }, 7000);
 //Form Reset After Submission
  document.getElementById('loginform').reset();

}


function login(){
   
   var formemail=document.getElementById("formemail");
   var formpassword=document.getElementById("formpassword");
firebase.auth().signInWithEmailAndPassword(formemail.value, formpassword.value).catch(function(error) {
  // Handle Errors here.

 var errorCode = error.code;
 var errorMessage = error.message;
 
 
});
}
firebase.auth().onAuthStateChanged(function (user){
    if (user) {
    // User is signed in
  window.open("dashboard.html","_self");


} else {
    // No user is signed in
  alert("please sign in");  

}

});


function logout(){
firebase.auth().signOut();
}

