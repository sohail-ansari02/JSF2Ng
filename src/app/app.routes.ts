import { Routes } from '@angular/router';
import { UserRecordsComponent } from './concepts/crud/user-records/user-records.component';

export const routes: Routes = [
  {
    path: 'users',
    component: UserRecordsComponent
  }
];
