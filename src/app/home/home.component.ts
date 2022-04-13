import { Component } from "@angular/core";
import { Router } from "@angular/router";

export type Profile = {
  name: string,
  image: string,
}

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent {
  profiles = [] as Profile[];
  newName = "";

  constructor(private router: Router) {
    this.newName = "Pepe";
    this.add();
    console.log("yies");
  }

  add() {
    this.profiles.push({
      name: this.newName,
      image: `https://randomuser.me/api/portraits/${this.randomGen()}/${this.randomNum()}.jpg`
    });
    this.newName = "";
  }

  randomGen() {
    return Math.random() < 0.5 ? "women" : "men";
  }

  randomNum() {
    return Math.floor(Math.random() * 99);
  }

  goToProfile(profile: Profile) {
    this.router.navigate(["profile", profile.name]);
  }
}
