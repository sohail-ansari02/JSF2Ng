import { Injectable } from '@angular/core';
import { USER_MOCK_DATA } from '../user-records/user-records.data';
import { UserData } from '../interfaces/user-data';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  data = [...USER_MOCK_DATA];
  constructor() {}
  get(id: any): UserData | undefined {
    return this.data.find((user) => user.id == id);
  }
  update(id: any, updatedUser: UserData): void {
    let index = this.data.findIndex((user) => user.id == id);
    this.data[index] = { ...this.data[index], ...updatedUser };
    console.log(this.data[index]);
  }
  delete(id: any): void {
    let index = this.data.findIndex((user) => user.id == id);
    this.data.splice(index, 1);
  }
}
