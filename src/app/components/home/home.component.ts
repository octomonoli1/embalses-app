import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit, TransferState } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Embalse } from '../../model/embalse';
import { Observable, tap } from 'rxjs';
import { EmbalsesService } from '../../services/embalses.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{

  data: Embalse[] = [];

  constructor(private embalseService: EmbalsesService) {}

  ngOnInit(): void {
    this.embalseService.getEmbalses().subscribe((data) =>{
      this.data = data;
    });
  }

}
