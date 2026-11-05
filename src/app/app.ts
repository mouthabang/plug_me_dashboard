import { Component, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NavBar } from "./components/nav-bar/nav-bar";
import { SideBar } from "./components/side-bar/side-bar";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, NavBar, SideBar],
  templateUrl: "./app.html",
  styleUrl: "./app.scss",
})
export class App {
  protected readonly title = signal("plug_me_dashboard");
}
