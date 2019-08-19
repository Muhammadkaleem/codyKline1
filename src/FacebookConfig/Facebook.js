export function faceBookAuth() {
  LoginManager.logInWithPermissions(["public_profile", "email"])
    .then(result => {
      if (result.isCancelled) {
      } else {
        return AccessToken.getCurrentAccessToken();
      }
    })
    .then(data => {
      const cred = provider.credential(data.accessToken);
      return cred;
    })
    .then(res => {
      this.navigateToHome(res);
    })
    .catch(err => {
      console.log(err);
    });
}
