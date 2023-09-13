import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoService } from '../produto.service';
import { CategoriaService } from 'src/app/categoria/categoria.service';
import { SubcategoriaService } from 'src/app/subcategoria/subcategoria.service';

@Component({
  selector: 'app-produto-listar',
  templateUrl: './produto-listar.component.html',
  styleUrls: ['./produto-listar.component.scss']
})
export class ProdutoListarComponent implements OnInit{
  public dados:Array<any> = [];
  public descricaoCategoria:string = '';
  public descricaoSubcategoria:string = '';
  
  constructor(
    public produtoService:ProdutoService,
    public router:Router,
    public categoriaService:CategoriaService,
    public subcategoriaService:SubcategoriaService
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
          let subcategoria:any = await this.subcategoriaService.getByIndice(e.subcategoria);

          this.dados.push({
            descricao: e.descricao,
            nome: e.nome,
            preco:e.preco,
            categoria: categoria.descricao,
            subcategoria: subcategoria.descricao,
            indice: Object.keys(snapshot.val())[i]
          });
        }
      );
    });
  }
  
  excluir(key:string){
    this.produtoService.excluir(key);
  }
  
  editar(key:string){
    this.router.navigate(['/produto/form/' + key]);
  }
}