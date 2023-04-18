const firebaseConfig = {
    apiKey: "AIzaSyAsQimnDZnoxMXKdBr1MmxuX4Fm06oJgoo",
    authDomain: "kwitter-9c82d.firebaseapp.com",
    databaseURL: "https://kwitter-9c82d-default-rtdb.firebaseio.com",
    projectId: "kwitter-9c82d",
    storageBucket: "kwitter-9c82d.appspot.com",
    messagingSenderId: "415701049087",
    appId: "1:415701049087:web:b1478c8395ca9d5bc276ca"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  function addUser() {

    user_name = document.getElementById("user_name").value

    localStorage.setItem("user_name", user_name);

      window.location = "kwitter_room.html";

}