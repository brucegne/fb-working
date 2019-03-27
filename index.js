// Import stylesheets
import './style.css';
// Import firebase setup
import firebase from './fire.js'
import './app.js';

// Write Javascript code!
var appDiv = document.getElementById('app');
var appkDiv = document.getElementById('appk');

const ref = firebase.database().ref();
//ref.child('/starter').push({ "startup": 'Hello There World' });

ref.child('/starter').on('value', function (snap) {
  snap.forEach(function (childSnapshot) {
    var childData = childSnapshot.val();
    appkDiv.innerHTML = childSnapshot.key;
    appDiv.innerHTML = appDiv.innerHTML + '<br />' + childData.startup;
  })
})
