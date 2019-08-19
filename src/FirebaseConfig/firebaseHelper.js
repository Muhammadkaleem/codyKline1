import firebase from "react-native-firebase";
import "firebase/firestore";
import "firebase/storage";

export function SignUpHandler(email, password, username, props) {
  console.log("email==>", email);
  console.log("password==>", password);
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user => {
      console.log("user =>", user);
      console.log("firestore");

      firebase
        .firestore()
        .collection("Profile")
        .doc(user.uid)
        .set({
          email: email,
          username: username,
          profileImage: "",
          phoneNo: ""
        });
      setTimeout(() => {
        props.navigation.navigate("AgeVerification");
      }, 1000);
    })
    .catch(error => {
      return alert(error.message);
    });
}

export function LoginHandler(email, password, props) {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => {
      setTimeout(() => {
        props.navigation.navigate("Home");
      }, 1000);
    })
    .catch(error => {
      return alert(error.message);
    });
}
export function addToUserCart(ItemCartList, props) {
  firebase
    .firestore()
    .collection("Profile")
    .doc(firebase.auth().currentUser.uid)
    .get()
    .then(snapshot => {
      if (snapshot.data().ItemCartList !== undefined) {
        console.log("snapshot==>", snapshot);
        userCarts = snapshot.data().ItemCartList;
        let Array = [...userCarts, ...ItemCartList];
        firebase
          .firestore()
          .collection("Profile")
          .doc(firebase.auth().currentUser.uid)
          .update({
            ItemCartList: Array
          });
        setTimeout(() => {
          props.navigation.navigate("MyCart");
        }, 1000);
      } else {
        // User Create his cart list first time
        firebase
          .firestore()
          .collection("Profile")
          .doc(firebase.auth().currentUser.uid)
          .update({
            ItemCartList: userCart
          });
        setTimeout(() => {
          props.navigation.navigate("MyCart");
        }, 1000);
      }
    });
}
///////////////////
