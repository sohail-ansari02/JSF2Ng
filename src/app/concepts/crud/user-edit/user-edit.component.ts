import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserData } from '../interfaces/user-data';
import { USER_MOCK_DATA } from '../user-records/user-records.data';
import { UserService } from '../services/user.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css',
})
export class UserEditComponent implements OnInit {
  router = inject(Router);
  route = inject(ActivatedRoute);
  us = inject(UserService);
  user!: UserData | undefined;
  userForm!: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.userForm = this.fb.group({
      id: [''],
      name: [''], // Add default values or get from service
      email: [''],
      password: [''],
      gender: [''],
      address: [''],
    });
    let id = this.route.snapshot.paramMap.get('id');
    this.initData(id);
  }
  initData(id: any): void {
    this.user = this.us.get(id);
    this.userForm.setValue({ ...this.user });
  }
  updateUser() {
    this.us.update(this.user?.id, this.userForm.value);
    this.router.navigate(['users']);
  }
}
