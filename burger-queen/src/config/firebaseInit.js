export const firebaseInit = () =>{
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyBU8BYRCtvSiZEzuzU9tyWNBEErB_OMTgQ",
        authDomain: "burger-queen-83603.firebaseapp.com",
        databaseURL: "https://burger-queen-83603.firebaseio.com",
        projectId: "burger-queen-83603",
        storageBucket: "burger-queen-83603.appspot.com",
        messagingSenderId: "843571810296",
        appId: "1:843571810296:web:b1315afb914f6a98"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
}