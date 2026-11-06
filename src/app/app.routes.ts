import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./pages/auth/log-in/log-in").then((m) => m.LogIn),
    title: "Sign In",
  },

  {
    path: "",
    loadComponent: () =>
      import("./pages/dashboard/dashboard").then((m) => m.Dashboard),
  },

  {
    path: "**",
    loadComponent: () =>
      import("./pages/error-404/error-404").then((m) => m.Error404),
  },
];
