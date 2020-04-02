importScripts('https://www.gstatic.com/firebasejs/7.13.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.13.0/firebase-messaging.js');

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

  const messaging=firebase.messaging();
  messaging.setBackgroundMessageHandler(function(payload){
     const title='Hello World';
     const options={
        body:payload.data.status
     };
      return self.registration.showNotification(title,options);
});
