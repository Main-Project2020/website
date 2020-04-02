
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
  const messaging = firebase.messaging();
  
  messaging.requestPermission()
  .then(function() {
    console.log('Have Permission');
    return messaging.getToken();
})
.then(function(token){
 console.log(token);
})
.catch(function(err) {
  console.log('Error occured');
  return self.registration.showNotification(title, options);
})
messaging.onMessage(function(payload) {
 console.log('onMessage:',payload);
 alert('proceed to pay!!', Notification);
 
});

firebase.auth().onAuthStateChanged(function (user){
    if (user) {
    // User is signed in
  alert("welcome");
 
  
} else {
    // No user is signed in
  window.open("index.html","_self");
}
});
function login(){
    var userEmail = document.getElementById('form-email').value;
    var userPass = document.getElementById('form-password').value;

firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
window.alert("Error:" + errorMessage);
  // ...
});
}
function logout(){
firebase.auth().signOut();
}  
/*setTimeout(function getConfirmation() {
               var retVal = confirm("sent money to user 1 now ?");
               if( retVal == true ) {
                  document.write ("User wants to continue!");
                  return true;
               } else {
                  document.write ("User does not want to continue!");
                  return false;
               }
            }, 20000);*/


