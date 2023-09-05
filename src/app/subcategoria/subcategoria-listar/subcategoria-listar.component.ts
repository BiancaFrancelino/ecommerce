import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubcategoriaService } from '../subcategoria.service';

@Component({
  selector: 'app-subcategoria-listar',
  templateUrl: './subcategoria-listar.component.html',
  styleUrls: ['./subcategoria-listar.component.scss']
})
export class SubcategoriaListarComponent implements OnInit{
  public dados:Array<any> = [];
  
  constructor(
    public subcategoriaService:SubcategoriaService,
    public router:Router
  ){}

  ngOnInit(): void {
    this.subcategoriaService.listar()
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
    this.subcategoriaService.excluir(key);
  }
  
  editar(key:string){
    this.router.navigate(['/subcategoria/form/' + key]);
  }
}