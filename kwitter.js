function addUser(){
    user=document.getElementById("username").value;
    localStorage.setItem("user_name", user);

    window.location="kwitter_room.html";
}