import {
  Component,
  ElementRef,
  HostListener,
  inject,
  signal,
  ViewChild,
} from "@angular/core";
import { LayoutService } from "../../services/layout.service";

@Component({
  imports: [],
  selector: "app-nav-bar",
  styleUrl: "./nav-bar.scss",
  templateUrl: "./nav-bar.html",
})
export class NavBar {
  layoutService = inject(LayoutService);

  @ViewChild("searchInput")
  searchInput!: ElementRef<HTMLInputElement>;

  isApplicationMenuOpen = this.layoutService.applicationMenuOpen;

  sidebarToggle = this.layoutService.sidebarToggle;

  isMobile = signal(false);

  constructor() {
    this.checkScreenSize();
  }

  toggleSidebar(): void {
    this.layoutService.toggleSidebar();
  }

  toggleApplicationMenu(): void {
    this.layoutService.toggleApplicationMenu();
  }

  focusSearch(): void {
    this.searchInput?.nativeElement.focus();
  }

  onSearchSubmit(event: Event): void {
    event.preventDefault();

    const searchTerm = this.searchInput.nativeElement.value.trim();

    if (searchTerm) {
      console.log("Search:", searchTerm);

      // Implement your dashboard search functionality here.
    }
  }

  @HostListener("window:keydown", ["$event"])
  handleKeyboardShortcut(event: KeyboardEvent): void {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      this.focusSearch();
    }

    if (event.key === "Escape") {
      this.layoutService.closeApplicationMenu();
    }
  }

  @HostListener("window:resize")
  checkScreenSize(): void {
    this.isMobile.set(window.innerWidth < 1280);

    if (!this.isMobile()) {
      this.layoutService.closeApplicationMenu();
    }
  }
}
