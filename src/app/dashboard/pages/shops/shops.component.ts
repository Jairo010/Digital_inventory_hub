import { Component, inject } from '@angular/core';
import { TableComponent } from '../../../shared/table/table.component';
import { CommonModule } from '@angular/common';
import { ShopsService } from '../../../services/shops/shops.service';
import { error } from 'console';

@Component({
  selector: 'app-shops',
  standalone: true,
  imports: [TableComponent, CommonModule],
  templateUrl: './shops.component.html',
  styleUrl: './shops.component.css'
})
export class ShopsComponent {
  isModalOpen: boolean = false;
  public shops = []

  shopService = inject(ShopsService);

  constructor (){
    this.getShops();
  } 

  async getShops(){
    await this.shopService.get_bussines_with_user().then(data =>{
      this.shops = data;
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
    name: "Nombre",
    owner: "Duenio",
    status: "Estado",
    actions: "Acciones"
  }
  public keyMap = {
    name: "name",
    owner: "user.owner",
    status: "status",
  };
}
