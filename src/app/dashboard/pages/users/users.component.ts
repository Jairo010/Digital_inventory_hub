import { Component } from '@angular/core';
import { TableComponent } from '../../../shared/table/table.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [TableComponent, CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  isModalOpen: boolean = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
  public users = [
    {
      user: "Jairo",
      rol: "Admin",
      email: "jairo12@gmail.com"
    },
    {
      user: "Jairo",
      rol: "Admin",
      email: "jairo12@gmail.com"
    },
    {
      user: "Jairo",
      rol: "Admin",
      email: "jairo12@gmail.com"
    }
  ];

  public headers = {
    users: "Usuarios",
    rol: "Roles",
    emails: "Emails",
    actions: "Acciones"
  }

  public keyMap = {
    users: "user",
    rol: "rol",
    emails: "email",
  };
}
