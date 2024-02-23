import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { TableColumn } from '../interfaces/table-column';
import { COLUMNS, USER_MOCK_DATA } from './user-records.data';
import { UserData } from '../interfaces/user-data';
@Component({
  selector: 'app-user-records',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './user-records.component.html',
  styleUrl: './user-records.component.css',
})
export class UserRecordsComponent {
  columns: TableColumn[] = COLUMNS;
  data: Array<UserData | any> = USER_MOCK_DATA;
}
