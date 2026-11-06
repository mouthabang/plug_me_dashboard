import { Component } from "@angular/core";
import { SideBar } from "../side-bar/side-bar";
import { NavBar } from "../nav-bar/nav-bar";
import { RouterOutlet } from "@angular/router";
import { LayoutService } from "../../services/layout.service";

@Component({
  imports: [RouterOutlet, NavBar, SideBar],
  selector: "app-layout",
  styleUrl: "./layout.scss",
  templateUrl: "./layout.html",
})
export class Layout {
  constructor(private layoutService: LayoutService) {
    layoutService.setShell(false);
  }
}
