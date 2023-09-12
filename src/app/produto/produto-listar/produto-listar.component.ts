import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoService } from '../produto.service';
import { CategoriaService } from 'src/app/categoria/categoria.service';

@Component({
  selector: 'app-produto-listar',
  templateUrl: './produto-listar.component.html',
  styleUrls: ['./produto-listar.component.scss']
})
export class ProdutoListarComponent implements OnInit{
  public dados:Array<any> = [];
  public descricaoCategoria:string = '';
  
  constructor(
    public produtoService:ProdutoService,
    public router:Router,
    public categoriaService:CategoriaService
  ){}

  ngOnInit(): void {
    this.produtoService.listar()
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
            categoria: this.descricaoCategoria,
            indice: Object.keys(snapshot.val())[i]
          });
        }
      );
    });

    console.log(this.dados);
  }
  
  excluir(key:string){
    this.produtoService.excluir(key);
  }
  
  editar(key:string){
    this.router.navigate(['/produto/form/' + key]);
  }
}