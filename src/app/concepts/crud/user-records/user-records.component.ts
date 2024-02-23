import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-user-records',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './user-records.component.html',
  styleUrl: './user-records.component.css'
})
export class UserRecordsComponent {

}
