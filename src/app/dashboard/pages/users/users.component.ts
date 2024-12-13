import { Component, inject } from '@angular/core';
import { TableComponent } from '../../../shared/table/table.component';
import { CommonModule } from '@angular/common';
import { UsersService } from '../../../services/users/users.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [TableComponent, CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  isModalOpen: boolean = false;
  public users = [];

  userService = inject(UsersService);

  constructor (){
    this.getShops();
  } 

  async getShops(){
    await this.userService.getUsers().then(data =>{
      this.users = data;
      console.log(data);
      
    }).catch(error =>{
      console.log(error);
      
    })
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  public headers = {
    users: "Usuarios",
    rol: "Roles",
    emails: "Emails",
    actions: "Acciones"
  }

  public keyMap = {
    users: "nickname",
    rol: "rol",
    emails: "email",
  };
}
