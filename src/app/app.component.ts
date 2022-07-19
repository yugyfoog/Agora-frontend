import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Content } from './models/content'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Agora';

  greeting : Content = { 'id': '', 'message': '' };

  constructor(private http: HttpClient) {
    http.get<Content>('http://localhost:8080/resource')
        .subscribe(data => this.greeting = data);
  }

}
