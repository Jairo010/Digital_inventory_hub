import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HeadersUsers, Users } from '../../interfaces/users.interface';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  @Input() data: { [key: string]: any }[] = [];
  @Input() headers: { [key: string]: string } = {};
  @Input() keyMap: { [key: string]: string } = {};

  sortHeaders = (a: any, b: any): number => {
    const order = Object.keys(this.headers);
    return order.indexOf(a.key) - order.indexOf(b.key);
  };

  public getValue(row: any, key: string): any {
    return key.split('.').reduce((acc, curr) => acc && acc[curr], row);
  }
  
}
