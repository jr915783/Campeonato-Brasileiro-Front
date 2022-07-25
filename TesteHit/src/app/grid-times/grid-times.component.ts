import { Component, OnInit, TemplateRef } from '@angular/core';
import { TimeService } from '../services/time.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-grid-times',
  templateUrl: './grid-times.component.html',
  styleUrls: ['./grid-times.component.scss'],
})
export class GridTimesComponent implements OnInit {
  public listaTimes: any = [];
  public gridFiltrado: any;
  public detalhesTime: any;
  public mostrarPesquisa: boolean = false;
  public campeonato: string = 'Brasileiro';
  public filtroNaoEncotrado: boolean = false;
  public filtroSelecionado: any ="Filtrar Por";
  public filtroSelecionadoMostrar:boolean = true;
  public comboFiltro: any []= [
    {id: 1, tipo : "time"},
    {id: 2, tipo : "aproveitamento acima de"},
    {id: 3, tipo : "saldo de gols acima de"},
    {id: 4, tipo : "ultimos jogos com vitória"},
    {id: 5, tipo : "ultimos jogos com derrota"}
  ]
  private _filtroGrid: string = '';
  modalRef?: BsModalRef;

  public get filtroGrid(): string {
    return this._filtroGrid;
  }

  public set filtroGrid(value: string) {
    this._filtroGrid = value;
    this.gridFiltrado = this.filtroGrid ? this.filtrarGrid(this.filtroGrid) : this.listaTimes;
    this.gridFiltrado.length == 0
      ? (this.filtroNaoEncotrado = true)
      : (this.filtroNaoEncotrado = false);
  }

  filtrarGrid(filtrarPor: any) {  
    
    switch (this.filtroSelecionado) {      
      case 'aproveitamento acima de': {
        filtrarPor = filtrarPor.toLocaleLowerCase();
        return this.listaTimes.filter((v: any) => v.aproveitamento > filtrarPor);
      }

      case 'saldo de gols acima de': {
        filtrarPor = filtrarPor.toLocaleLowerCase();
        return this.listaTimes.filter((v: any) => v.saldo_gols > filtrarPor);
      }

      case 'ultimos jogos com vitória': {        
        return this.gridFiltrado = this.listaTimes.filter((v: any) => v.ultimos_jogos[0] == 'v');
      }

      case 'ultimos jogos com derrota': {
        return this.gridFiltrado = this.listaTimes.filter((v: any) => v.ultimos_jogos[0] == 'd');
      }
      default :{         
          filtrarPor = filtrarPor.toLocaleLowerCase();
          return this.listaTimes.filter(
            (value: any) =>
              value.time.nome_popular.toLocaleLowerCase().indexOf(filtrarPor) !== -1
          );        
      }
    }
  }

  filtrarGridUtimosJogos(value : string){    
    this.filtroSelecionadoMostrar = false;  
    if(value == "ultimos jogos com vitória" || value == "ultimos jogos com derrota"){
      this.mostrarPesquisa = true;
      this.filtrarGrid(value);
    } else{
      this.mostrarPesquisa = false;
      this.gridFiltrado = this.listaTimes;
    }          
  }
 
  openModal(template: TemplateRef<any>, time : any) {    
    this.detalhesTime = time; 
    this.modalRef = this.modalService.show(template);
  }

  constructor(private timeService: TimeService, private modalService: BsModalService) {}

  ngOnInit(): void {
    this.listaTimes = this.timeService.getTimes();
    this.gridFiltrado = this.listaTimes;  
  }  
}
