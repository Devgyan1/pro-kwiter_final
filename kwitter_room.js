var firebaseConfig = {
      apiKey: "AIzaSyCZYwrQeZE0OcwctMKteqlfYdgC8Ssgu1w",
      authDomain: "kwitter-be0f7.firebaseapp.com",
      databaseURL: "https://kwitter-be0f7-default-rtdb.firebaseio.com",
      projectId: "kwitter-be0f7",
      storageBucket: "kwitter-be0f7.appspot.com",
      messagingSenderId: "845892706009",
      appId: "1:845892706009:web:847215d6c35ed1021ee8c8"
    };
      // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
username= localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + username + "!!";

function addroom(){
  rname = document.getElementById("roomname").value;
  firebase.database().ref("/").child(rname).update({
    purpose:"adding room name"
  });

  localStorage.setItem("room", rname);
  window.location="kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name-" + Room_names);
rooms="<div class='room' id='+Room_names+' onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
document.getElementById("output").innerHTML += rooms;
      //End code
      });});}
getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("roomName", name);
  window.location="kwitter_page.html";
}


function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("roomName");
      window.location="index.html";
}