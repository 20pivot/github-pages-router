import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Profile } from "../home/home.component";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent {
  profile = {} as Profile;

  constructor(private route: ActivatedRoute) {
    this.profile = {
      name: route.snapshot.params["profile"],
      image: `https://randomuser.me/api/portraits/${this.randomGen()}/${this.randomNum()}.jpg`
    };
  }

  randomGen() {
    return Math.random() < 0.5 ? "women" : "men";
  }

  randomNum() {
    return Math.floor(Math.random() * 99);
  }
}
