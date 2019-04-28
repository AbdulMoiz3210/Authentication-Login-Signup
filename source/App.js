import React, { Component } from "react";
import { View, Text } from "react-native";
// import the firebase third party lib
import firebase from "firebase";
// Custom Components to be used in the app

import Header from "./components/common/Header";
import CustomButton from "./components/common/CustomButton";
import CardSection from "./components/common/CardSection";
import Card from "./components/common/Card";
import Spinner from "./components/common/Spinner";


// Import our LoginForm component to be displayed on the screen
import LoginForm from "./components/LoginForm";

class App extends Component {
state = { loggedIn: null };
// Life cycle method to init the firebase
componentWillMount() {
firebase.initializeApp({
  apiKey: "AIzaSyBOtt3jlELN_OG61n_tZd6qAFxYU5R-9W8",
    authDomain: "rnapp-auth-class1.firebaseapp.com",
    databaseURL: "https://rnapp-auth-class1.firebaseio.com",
    projectId: "rnapp-auth-class1",
    storageBucket: "rnapp-auth-class1.appspot.com",
    messagingSenderId: "456490350678"
});

//Handle the Application when it's logged in or logged out
firebase.auth().onAuthStateChanged(user => {
  if (user) {
  this.setState({ loggedIn: true });
  } else {
  this.setState({ loggedIn: false });
  }
  });
  }
  
  renderContent() {
  switch (this.state.loggedIn) {
  case true:
  return (
  <Card>
  <CardSection>
  <CustomButton onPress={() => firebase.auth().signOut()}>
  Logout
  </CustomButton>
  </CardSection>
  </Card>
  );
  case false:
  return <LoginForm />;
  default:
  return <Spinner size="large" />;
  }
  }
  render() {
  return (
  <View>
  <Header headerText="Authentication" />
  {this.renderContent()}
  {/* 
  Before the renderContent Handling
  <LoginForm /> */}
  </View>
  );
  }
  }
  
  export default App;
  