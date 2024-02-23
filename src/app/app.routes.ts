import { Routes } from '@angular/router';
import { UserRecordsComponent } from './concepts/crud/user-records/user-records.component';
import { LayoutComponent } from './core/layout/layout.component';
import { USERS } from './core/layout/routes_name';
import { UserEditComponent } from './concepts/crud/user-edit/user-edit.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: USERS,
        pathMatch: 'full',
      },
      {
        path: USERS,
        children: [
          {
            path: '',
            component: UserRecordsComponent,
            data: {
              pageName: 'User Records',
            },
          },
          {
            path: ':id',
            component: UserEditComponent,
            data: {
              pageName: 'User Edit/Update',
            },
          },
        ],
      },
    ],
  },
];
