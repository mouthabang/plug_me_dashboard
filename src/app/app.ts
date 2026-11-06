import { Component, inject, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NavBar } from "./components/nav-bar/nav-bar";
import { SideBar } from "./components/side-bar/side-bar";
import { Layout } from "./components/layout/layout";
import { LayoutService } from "./services/layout.service";

@Component({
  selector: "app-root",
  imports: [Layout, RouterOutlet],
  templateUrl: "./app.html",
  styleUrl: "./app.scss",
})
export class App {
  layoutSerive = inject(LayoutService);
}
