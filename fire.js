import firebase from 'firebase'
var config = {
  apiKey: "AIzaSyCUrspboemV3oQqTD1dRuWOg_mmGS-l-74",
  authDomain: "testcms-128d3.firebaseapp.com",
  databaseURL: "https://testcms-128d3.firebaseio.com",
  projectId: "testcms-128d3",
  storageBucket: "testcms-128d3.appspot.com",
  messagingSenderId: "688744113866"
};
firebase.initializeApp(config);
export default firebase;