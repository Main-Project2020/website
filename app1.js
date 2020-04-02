
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
  messaging.usePublicVapidkey('BP8qVx53FNyShHLYsWbF2Z6xbrNw2J2UD6Lz8_IZwxCzVVItAuydM4Q3YhgqM9cz-_S3Jxjz_U0CKt78vKcFZJI');
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
 try{  //try???
      console.log('Message received. ', payload);

      noteTitle = payload.notification.title; 
      noteOptions = {
        body: payload.notification.body,
        //this is my image in my public folder
      };

      console.log("title ",noteTitle, " ", payload.notification.body);
          //var notification = //examples include this, seems not needed

      new Notification(noteTitle, noteOptions);//This can be used to generate a local notification, without an incoming message. noteOptions has to be an object
    }
    catch(err){
      console.log('Caught error: ',err);
    }
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


