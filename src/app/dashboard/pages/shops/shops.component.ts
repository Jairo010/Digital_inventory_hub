import { Component } from '@angular/core';
import { TableComponent } from '../../../shared/table/table.component';

@Component({
  selector: 'app-shops',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './shops.component.html',
  styleUrl: './shops.component.css'
})
export class ShopsComponent {
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
