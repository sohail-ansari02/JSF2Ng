import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { TableColumn } from '../interfaces/table-column';
import { COLUMNS } from './user-records.data';
@Component({
  selector: 'app-user-records',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './user-records.component.html',
  styleUrl: './user-records.component.css',
})
export class UserRecordsComponent {
  columns: TableColumn[] = COLUMNS;
}
