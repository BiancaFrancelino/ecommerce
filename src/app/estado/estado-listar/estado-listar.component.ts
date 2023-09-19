import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstadoService } from '../estado.service';

@Component({
  selector: 'app-estado-listar',
  templateUrl: './estado-listar.component.html',
  styleUrls: ['./estado-listar.component.scss']
})
export class EstadoListarComponent implements OnInit{
  public dados:Array<any> = [];
  
  constructor(
    public estadoService:EstadoService,
    public router:Router
  ){}

  ngOnInit(): void {
    this.estadoService.listar()
    .on('value',(snapshot:any) => {
      this.dados.splice(0,this.dados.length);

      console.log( snapshot.val); 
      let response = snapshot.val();
      if (response == null) return;  
      
      Object.values( response )
      .forEach(
        (e:any,i:number) => {
          this.dados.push({
            nome: e.nome,
            sigla: e.sigla,
            indice: Object.keys(snapshot.val())[i]
          });
        }
      );
    });
  }
  
  excluir(key:string){
    this.estadoService.excluir(key);
  }
  
  editar(key:string){
    this.router.navigate(['/estado/form/' + key]);
  }
}