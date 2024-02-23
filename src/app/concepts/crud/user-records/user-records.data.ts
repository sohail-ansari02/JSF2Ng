import { TableColumn } from '../interfaces/table-column';
import { UserData } from '../interfaces/user-data';

export const COLUMNS: TableColumn[] = [
  {
    name: 'ID',
    key: 'id',
  },
  {
    name: 'User Name',
    key: 'name',
  },
  {
    name: 'Email ID',
    key: 'email',
  },
  {
    name: 'Password',
    key: 'password',
  },
  {
    name: 'Gender',
    key: 'gender',
  },
  {
    name: 'Address',
    key: 'address',
  },
];

export const USER_MOCK_DATA: UserData[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    password: 'securepassword123',
    gender: 'Male',
    address: '123 Main Street, Cityville, USA',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    password: 'password456',
    gender: 'Female',
    address: '456 Oak Avenue, Townsville, USA',
  },
  {
    id: 3,
    name: 'Sam Johnson',
    email: 'sam.johnson@example.com',
    password: 'strongpassword789',
    gender: 'Male',
    address: '789 Elm Road, Villagetown, USA',
  },
  {
    id: 4,
    name: 'Emily Davis',
    email: 'emily.davis@example.com',
    password: 'secret123',
    gender: 'Female',
    address: '567 Pine Lane, Hamlet City, USA',
  },
  {
    id: 5,
    name: 'Alex Turner',
    email: 'alex.turner@example.com',
    password: 'mypassword321',
    gender: 'Male',
    address: '890 Maple Street, Riverside, USA',
  },
  {
    id: 6,
    name: 'Sophia Brown',
    email: 'sophia.brown@example.com',
    password: 'password987',
    gender: 'Female',
    address: '234 Cedar Avenue, Lakeside, USA',
  },
  {
    id: 7,
    name: 'David Miller',
    email: 'david.miller@example.com',
    password: 'securepass789',
    gender: 'Male',
    address: '678 Birch Road, Mountainview, USA',
  },
  {
    id: 8,
    name: 'Olivia White',
    email: 'olivia.white@example.com',
    password: 'olivia123',
    gender: 'Female',
    address: '901 Willow Lane, Meadowville, USA',
  },
  {
    id: 9,
    name: 'Liam Taylor',
    email: 'liam.taylor@example.com',
    password: 'liam456',
    gender: 'Male',
    address: '123 Aspen Street, Valleytown, USA',
  },
  {
    id: 10,
    name: 'Ava Martinez',
    email: 'ava.martinez@example.com',
    password: 'avapass789',
    gender: 'Female',
    address: '345 Pine Lane, Hilltop City, USA',
  },
];
