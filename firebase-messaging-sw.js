importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");
 

firebase.initializeApp({
    apiKey: "AIzaSyDZtqpJLEonB7C0K7vNy3HhB9N3obUIwP8",
    authDomain: "quicktrip-1.firebaseapp.com",
    projectId: "quicktrip-1",
    storageBucket: "quicktrip-1.appspot.com",
    messagingSenderId: "562548783263",
    appId: "1:562548783263:web:a85734bbf7d1c748440aaa"
  });

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});
