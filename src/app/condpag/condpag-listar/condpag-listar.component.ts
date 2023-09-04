import { Component, OnInit } from '@angular/core';
import { CondpagService } from '../condpag.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-condpag-listar',
  templateUrl: './condpag-listar.component.html',
  styleUrls: ['./condpag-listar.component.scss']
})
export class CondpagListarComponent implements OnInit{
  public dados:Array<any> = [];
  
  constructor(
    public condpagService:CondpagService,
    public router:Router
  ){}

  ngOnInit(): void {
    this.condpagService.listar()
    .on('value',(snapshot:any) => {
      this.dados.splice(0,this.dados.length);

      console.log( snapshot.val); 
      let response = snapshot.val();
      if (response == null) return;  
      
      Object.values( response )
      .forEach(
        (e:any,i:number) => {
          this.dados.push({
            descricao: e.descricao,
            indice: Object.keys(snapshot.val())[i]
          });
        }
      );
    });
  }
  
  excluir(key:string){
    this.condpagService.excluir(key);
  }
  
  editar(key:string){
    this.router.navigate(['/condpag/form/' + key]);
  }
}