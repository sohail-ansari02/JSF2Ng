import { Routes } from '@angular/router';
import { UserRecordsComponent } from './concepts/crud/user-records/user-records.component';
import { LayoutComponent } from './core/layout/layout.component';
import { USER_LIST } from './core/layout/routes_name';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: USER_LIST,
        pathMatch: 'full',
      },
      {
        path: USER_LIST,
        component: UserRecordsComponent,
        data: {
          pageName: 'User Records',
        },
      },
    ],
  },
];
