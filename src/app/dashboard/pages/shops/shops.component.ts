import { Component } from '@angular/core';
import { TableComponent } from '../../../shared/table/table.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shops',
  standalone: true,
  imports: [TableComponent, CommonModule],
  templateUrl: './shops.component.html',
  styleUrl: './shops.component.css'
})
export class ShopsComponent {
  isModalOpen: boolean = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
  public shops = [
    {
      name: "Frenkie's Store",
      owner: "jairo",
      state: "Verificado"
    },
    {
      name: "Frenkie's Store",
      owner: "jairo",
      state: "Verificado"
    },
    {
      name: "Frenkie's Store",
      owner: "jairo",
      state: "Verificado"
    }
  ];

  public headers = {
    name: "Nomobre",
    owner: "Duenio",
    state: "Estado",
    actions: "Acciones"
  }
  public keyMap = {
    name: "name",
    owner: "owner",
    state: "state",
  };
}
