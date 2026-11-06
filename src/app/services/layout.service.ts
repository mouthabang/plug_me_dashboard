import { Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LayoutService {
  /** Desktop rail collapse + mobile drawer open state */
  readonly sidebarToggle = signal(false);

  /** Show/hide the sidebar + header shell. */
  readonly showShell = signal(true);

  /** Mobile-only secondary menu (the ⋯ button) */
  readonly applicationMenuOpen = signal(false);

  toggleSidebar(): void {
    this.sidebarToggle.update((v) => !v);
  }

  closeSidebar(): void {
    this.sidebarToggle.set(false);
  }

  openSidebar(): void {
    this.sidebarToggle.set(true);
  }

  toggleApplicationMenu(): void {
    this.applicationMenuOpen.update((v) => !v);
  }

  closeApplicationMenu(): void {
    this.applicationMenuOpen.set(false);
  }

  toggleShell() {
    this.showShell.update((v) => !v);
  }
  setShell(v: boolean) {
    this.showShell.set(v);
  }
}
