import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  data: any = [];
  embalsesUrl: string = "https://portalrediam.cica.es/embalses/api/json/embalses";
  estadoUrl: string = "https://portalrediam.cica.es/embalses/api/json/andalucia/2025-04-09";

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('embalsesUrl').subscribe(data => this.data = data);
  }

}
