import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  inject,
  signal,
  viewChild,
} from "@angular/core";
import { LayoutService } from "../../services/layout.service";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.html",
  styleUrl: "./nav-bar.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "(window:resize)": "checkScreenSize()",
  },
})
export class NavBar {
  private layout = inject(LayoutService);

  readonly sidebarToggle = this.layout.sidebarToggle;
  readonly applicationMenuOpen = this.layout.applicationMenuOpen;
  readonly isMobile = signal(window.innerWidth < 1280);

  readonly notificationsOpen = signal(false);
  readonly notifying = signal(true);
  readonly userMenuOpen = signal(false);

  toggleSidebar() {
    this.layout.toggleSidebar();
  }
  toggleApplicationMenu() {
    this.layout.toggleApplicationMenu();
  }

  toggleNotifications() {
    this.notificationsOpen.update((v) => !v);
    if (this.notificationsOpen()) this.notifying.set(false);
    this.userMenuOpen.set(false);
  }

  toggleUserMenu() {
    this.userMenuOpen.update((v) => !v);
    this.notificationsOpen.set(false);
  }

  checkScreenSize() {
    this.isMobile.set(window.innerWidth < 1280);
    if (!this.isMobile()) this.layout.closeApplicationMenu();
  }

  @HostListener("document:click", ["$event"])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;

    // If the click is inside a dropdown wrapper, let the button toggle handle it
    if (target.closest("[data-dropdown]")) {
      return;
    }

    this.notificationsOpen.set(false);
    this.userMenuOpen.set(false);
  }

  @HostListener("document:keydown.escape")
  onEscape() {
    this.notificationsOpen.set(false);
    this.userMenuOpen.set(false);
  }
}
