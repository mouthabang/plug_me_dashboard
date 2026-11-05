import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
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
    "(window:keydown)": "onKeydown($event)",
    "(window:resize)": "checkScreenSize()",
  },
})
export class NavBar {
  private layout = inject(LayoutService);

  readonly searchInput = viewChild<ElementRef<HTMLInputElement>>("searchInput");

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

  focusSearch() {
    this.searchInput()?.nativeElement.focus();
  }

  onSearchSubmit(event: Event) {
    event.preventDefault();
    const term = this.searchInput()?.nativeElement.value.trim();
    if (term) console.log("Search:", term);
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

  onKeydown(event: KeyboardEvent) {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      this.focusSearch();
    }
    if (event.key === "Escape") {
      this.notificationsOpen.set(false);
      this.userMenuOpen.set(false);
      this.layout.closeApplicationMenu();
    }
  }

  checkScreenSize() {
    this.isMobile.set(window.innerWidth < 1280);
    if (!this.isMobile()) this.layout.closeApplicationMenu();
  }
}
