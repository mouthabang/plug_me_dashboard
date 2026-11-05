import { Component, HostListener, inject, signal } from "@angular/core";
import { LayoutService } from "../../services/layout.service";

@Component({
  imports: [],
  selector: "app-side-bar",
  styleUrl: "./side-bar.scss",
  templateUrl: "./side-bar.html",
})
export class SideBar {
  layoutService = inject(LayoutService);

  sidebarToggle = this.layoutService.sidebarToggle;

  closeSidebar(): void {
    this.layoutService.closeSidebar();
  }

  onSidebarClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;

    if (window.innerWidth < 1280 && target.closest("a")) {
      this.closeSidebar();
    }
  }

  @HostListener("window:resize")
  onResize(): void {
    if (window.innerWidth >= 1280) {
      this.closeSidebar();
    }
  }
}
