import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserCard } from "./user-card/user-card";

@Component({
  selector: 'app-root',
  imports: [UserCard],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  count = 0;
  title = "";

  increment() {
    this.count++;
  }

  decrement() {
    if (this.count > 0) {
      this.count--;
    }
  }

  limit() {
    if (this.count <= 0) {
      this.title = "You have reached the limit";                                                                                                            
    }
  }

  onDecrement() {
    this.decrement();

    this.limit();
  }
}
