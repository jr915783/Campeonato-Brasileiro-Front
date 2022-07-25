import { Component, OnInit } from '@angular/core';
import { TimeService } from '../services/time.service';

@Component({
  selector: 'app-tabela-times',
  templateUrl: './tabela-times.component.html',
  styleUrls: ['./tabela-times.component.scss'],
})
export class TabelaTimesComponent implements OnInit {
  listaTimes: any;
  campeonato:string ="Brasileiro";


  constructor(private timeService: TimeService) {}

  ngOnInit(): void {
    this.listaTimes = this.timeService.getTimes();  
  }
}
