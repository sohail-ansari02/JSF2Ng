import { Component, OnInit, inject } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { TableColumn } from '../interfaces/table-column';
import { COLUMNS, USER_MOCK_DATA } from './user-records.data';
import { UserData } from '../interfaces/user-data';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-records',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './user-records.component.html',
  styleUrl: './user-records.component.css',
})
export class UserRecordsComponent implements OnInit {
  router = inject(Router);
  us = inject(UserService);
  columns: TableColumn[] = COLUMNS;
  records: Array<UserData | any> = [];
  ngOnInit(): void {
    this.records = this.us.data;
  }
  onDelete(id: any){
    this.us.delete(id);
  }
  onUpdate(id: any){
    this.router.navigate(['users', id])
  }
}
