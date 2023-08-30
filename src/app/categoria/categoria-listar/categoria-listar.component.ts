import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria-listar',
  templateUrl: './categoria-listar.component.html',
  styleUrls: ['./categoria-listar.component.scss']
})
export class CategoriaListarComponent implements OnInit{
  public dados:Array<any> = [];
  
  constructor(
    public categoriaService:CategoriaService,
    public router:Router
  ){}

  ngOnInit(): void {
    this.categoriaService.listar()
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
    this.categoriaService.excluir(key);
  }
  
  editar(key:string){
    this.router.navigate(['/categoria/form/' + key]);
  }
}