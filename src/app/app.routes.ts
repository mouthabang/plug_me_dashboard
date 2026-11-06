import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "signin",
    loadComponent: () => import("./pages/log-in/log-in").then((m) => m.LogIn),
    title: "Sign In",
  },

  {
    path: "dashboard",
    loadComponent: () =>
      import("./pages/dashboard/dashboard").then((m) => m.Dashboard),
    title: "Dashboard",
  },

  {
    path: "**",
    loadComponent: () =>
      import("./pages/error-404/error-404").then((m) => m.Error404),
  },
];
