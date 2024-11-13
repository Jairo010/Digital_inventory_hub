import { Component } from '@angular/core';
import { TableComponent } from '../../../shared/table/table.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
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
}
