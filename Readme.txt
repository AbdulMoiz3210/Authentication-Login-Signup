Onpress:
it is a state that functionates the signout using firebase api in app.js file..
and signin is using through firebase api in LoginForm.js

1.OnbuttonPress:
its a method OnbuttonPress() that is used for promise method call...

2.onloginsucess() and onloginfailed() are two states that are used as a method in firebase authentication api call.. 

within Firebase promises Method:
 1.signInWithEmailAndPassword takes (email, password)
 2.createUserWithEmailAndPassword catches errors through onLoginSuccess onLoginFailed...

In App.js:

//Handle the Application when it's logged in or logged out
     
       firebase.auth().onAuthStateChanged () this is using for conditional error.

renderContent():
it is a function using for switching between screens..

firebase.initializeApp():
Method using to initialize the firebase....


componentWillMount():
componentWillMount is essentially the constructor. You can set instance properties that don't affect render,
pull data from a store synchronously and setState with it,
and other simple side effect free code you need to run when setting up your component.

//Summary
Configuration to Connect to Firebase
Handle the TextInput from the Login Form using State in LoginForm
Handle Spinner Login using Conditional Formating of JSX while rendering
Handle Similar Situation of Conditional Formating at AppLevel based on LoggedIn Info
Handle to Logout logic at App Level