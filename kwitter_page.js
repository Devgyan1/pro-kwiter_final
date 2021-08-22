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
//YOUR FIREBASE LINKS


user=localStorage.getItem("user_name");
room=localStorage.getItem("room");

function send(){
      message= document.getElementById("msg").value;
      firebase.database().ref(room).push({
            name:user,
            message:message,
            like:0
      });
      document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data["name"];
message=message_data["message"];
like=message_data["like"];

output_name="<h3>" + name + "<img class='user_tick' src='tick.png'></h3>";
output_message="<h3 class='message_h3'>" + message + "</h3>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'>";
outputspan="<span class='glyphicon glyphicon-thumbs-up'>like:" + like + "</span></button><hr>";
row= output_name + output_message + like_button + outputspan;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();


function updatelike(message_id){
      console.log("messege liked is" + message_id);
      button_id=message_id;
      likes=document.getElementById(button_id).value ;
      newlikes=Number(likes)+1;
      console.log(newlikes);
      firebase.database().ref(room).child(message_id).update({
            like:newlikes
      });
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("roomName");
      window.location="index.html";
}