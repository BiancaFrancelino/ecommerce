import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubcategoriaService } from '../subcategoria.service';
import { CategoriaService } from 'src/app/categoria/categoria.service';

@Component({
  selector: 'app-subcategoria-listar',
  templateUrl: './subcategoria-listar.component.html',
  styleUrls: ['./subcategoria-listar.component.scss']
})
export class SubcategoriaListarComponent implements OnInit{
  public dados:Array<any> = [];
  public descricaoCategoria:string = '';
  
  constructor(
    public subcategoriaService:SubcategoriaService,
    public router:Router,
    public categoriaService:CategoriaService
  ){}

  ngOnInit(): void {
    this.subcategoriaService.listar()
    .on('value',(snapshot:any) => {
      this.dados.splice(0,this.dados.length);

      let response = snapshot.val();
      if (response == null) return;  
      
      Object.values( response )
      .forEach(
        async (e:any,i:number) => {
          let categoria:any = await this.categoriaService.getByIndice(e.categoria);

          this.dados.push({
            descricao: e.descricao,
            categoria: categoria.descricao,
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