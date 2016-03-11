'use strict';

let ref = new Firebase("https://sizzling-torch-3223.firebaseio.com");
let user_email;
let user_password;


$("#registerButton").click( () => {
	user_email = $("#emailHolder").val();
	user_password = $("#pswHolder").val();
	
	ref.createUser({
	  email    : user_email,
	  password : user_password
	}, function(error, userData) {
	  if (error) {
	    console.log("Error creating user:", error);
	  } else {
	    console.log("Successfully created user account with uid:", userData.uid);
	  }
	});
})

$("#signInButton").click( () => {
	user_email = $("#emailHolder").val();
	user_password = $("#pswHolder").val();

	ref.authWithPassword({
	  email    : user_email,
	  password : user_password
	}, function(error, authData) {
	  if (error) {
	    console.log("Login Failed!", error);
	  } else {
	    console.log("Authenticated successfully with payload:", authData);
	  }
	});
})

$("#log_out").click(() => {
	ref.unAuth()
  	 
}, function(success) { 
	user_email = $("#emailHolder");
	user_password = $("#pswHolder");
	user_email.val("");
	user_password.val("");
	console.log("user successfully log out"); } 
);

var ref = new Firebase("https://<YOUR-FIREBASE-APP>.firebaseio.com");
ref.onAuth(function(authData) {
  if (authData) {
    console.log("Authenticated with uid:", authData.uid);
  } else {
    console.log("Client unauthenticated.")
  }
});

