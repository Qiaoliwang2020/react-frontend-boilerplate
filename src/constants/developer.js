class Developer {
  constructor() {
    this.visible = true;
    this.label = "Developer";
    this.verticalPosition = "bottom";
    this.horizontalPosition = "right";
    this.devDetails = {
      "user": "launchpad@user.com",
      "password": "password"
    };

  }
}


const instance = new Developer();
export default instance;