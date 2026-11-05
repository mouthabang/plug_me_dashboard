import { Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LayoutService {
  sidebarToggle = signal(false);

  toggleSidebar(): void {
    this.sidebarToggle.update((value) => !value);
  }

  closeSidebar(): void {
    this.sidebarToggle.set(false);
  }

  applicationMenuOpen = signal(false);

  toggleApplicationMenu(): void {
    this.applicationMenuOpen.update((value) => !value);
  }

  closeApplicationMenu(): void {
    this.applicationMenuOpen.set(false);
  }
}
