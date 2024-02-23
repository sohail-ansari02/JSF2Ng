import { Component, OnInit, inject } from '@angular/core';
import {
  ActivatedRoute,
  ActivationEnd,
  NavigationEnd,
  Router,
  RouterModule,
  RouterOutlet,
  RoutesRecognized,
} from '@angular/router';
import { filter, map, take, tap } from 'rxjs';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent implements OnInit {
  route = inject(ActivatedRoute);
  router = inject(Router);
  pageName: string = '';
  constructor() {
    this.setPageName();
  }
  ngOnInit(): void {}
  setPageName() {
    this.router.events
      .pipe(
        filter(
          (event) =>
            event instanceof ActivationEnd &&
            event?.snapshot?.data?.['pageName']
        ),
        map((event: any) => event?.snapshot?.data?.['pageName'])
      )
      .subscribe((pageName) => {
        this.pageName = pageName;
      });
  }
}
