
//AÑADE TUS ENLACES DE FIREBASE

// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBM8nGGnrIGzw63Ae4EV19n-RQJxwN3FMM",
      authDomain: "red--social.firebaseapp.com",
      databaseURL: "https://red--social-default-rtdb.firebaseio.com",
      projectId: "red--social",
      storageBucket: "red--social.appspot.com",
      messagingSenderId: "413684927874",
      appId: "1:413684927874:web:14cf6918cd24c24b55939b"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    

user_name=localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML="¡Hola "+user_name+"!";

function addRoom()
{
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
});
localStorage.setItem("room_name", room_name);
window.location = "Kwitter_page.html";

}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código

      //Final del código
      });});}
getData();


function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}








