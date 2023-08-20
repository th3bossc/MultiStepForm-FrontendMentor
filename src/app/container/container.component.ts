import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent {
  currentRoute: string = null;

  constructor(private route : ActivatedRoute, private router : Router) { }

  ngOnInit() {
    this.route.firstChild.url.subscribe(url => {
      this.currentRoute = url[0].path;
      console.log(this.currentRoute);
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.route.firstChild.url.subscribe(url => {
          this.currentRoute = url[0].path;
          console.log(this.currentRoute);
        });
      }
    });
  }

  
}
