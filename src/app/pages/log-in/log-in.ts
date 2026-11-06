import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { FormsModule, NgForm } from "@angular/forms";

@Component({
  imports: [RouterLink, FormsModule],
  selector: "app-log-in",
  styleUrl: "./log-in.scss",
  templateUrl: "./log-in.html",
})
export class LogIn {
  readonly showPassword = signal(false);
  readonly keepLoggedIn = signal(false);

  readonly email = signal("");
  readonly password = signal("");

  togglePassword(): void {
    this.showPassword.update((v) => !v);
  }

  toggleKeepLoggedIn(): void {
    this.keepLoggedIn.update((v) => !v);
  }

  onSubmit(form: NgForm): void {
    if (form.invalid) return;

    const payload = {
      email: this.email(),
      password: this.password(),
      keepLoggedIn: this.keepLoggedIn(),
    };

    console.log("Sign in payload:", payload);
    // TODO: call your auth API, then redirect
    // this.router.navigateByUrl('/dashboard');
  }
}
