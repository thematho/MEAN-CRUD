import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CRUD';

  constructor(private http: HttpClient) { }
  onClick() {
    this.http.get('/api/users')
      .subscribe((response) => {
        this.title = response.name;
        console.log(response.name);
      });
  }
}
