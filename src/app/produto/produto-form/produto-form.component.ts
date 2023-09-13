import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from '../produto.service';
import { CategoriaService } from 'src/app/categoria/categoria.service';
import { SubcategoriaService } from 'src/app/subcategoria/subcategoria.service';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.scss']
})
export class ProdutoFormComponent {
  public indice:string    = '';
  public nome:string = '';
  public preco:number = 0;
  public descricao:string = '';
  public categoria:string = '';
  public subcategoria:string = '';
  public categorias:Array<any> = [];
  public subcategorias:Array<any> = [];
  public is_desabilidado:boolean = true;

  constructor(
    public produtoService:ProdutoService,
    public activated_route:ActivatedRoute,
    public router:Router,
    public categoriaService:CategoriaService,
    public subcategoriaService:SubcategoriaService
  ){
    this.listarCategoria();
    this.activated_route.params.subscribe((params:any) => {
        if (params.indice == undefined) 
        return;

        this.produtoService.ref()
        .child('/' + params.indice)
        .on('value',(snapshot:any) => {
          let dado:any    = snapshot.val();
          this.indice     = params.indice;
          this.descricao  = dado.descricao;
          this.nome  = dado.nome;
          this.preco  = dado.preco;
          this.categoria = dado.categoria;
          this.subcategoria = dado.subcategoria;
        });
      }
    );
  }

  salvar() {

    if(this.nome == '') {
      document.querySelector('#nome')?.classList.add('has-errors');
      return;
    }

    if(this.preco == 0) {
      document.querySelector('#preco')?.classList.add('has-errors');
      return;
    }

    if(this.descricao == '') {
      document.querySelector('#descricao')?.classList.add('has-errors');
      return;
    }

    if(this.categoria == '') {
      document.querySelector('#categoria')?.classList.add('has-errors');
      return;
    }else{
      document.querySelector('#categoria')?.classList.remove('has-errors');    
    }

    if(this.indice === '') {
      this.produtoService.salvar({
        nome      : this.nome,
        preco     : this.preco,
        descricao : this.descricao,
        categoria : this.categoria,
        subcategoria : this.subcategoria
      })
    }else {
      let dados = {
        nome      : this.nome,
        preco     : this.preco,
        descricao : this.descricao,
        categoria : this.categoria,
        subcategoria : this.subcategoria
      };
      this.produtoService.editar(this.indice, dados);
    }
    this.router.navigate(['/produto']);
  }

  listarCategoria(){
    this.categoriaService.listar()
    .once('value',(snapshot:any) => {

      // Dados retornados do Firebase
      let response = snapshot.val();

      // Não setar valores caso não venha
      // nenhum registro
      if (response == null) return;

      Object.values( response )
      .forEach(
        (e:any,i:number) => {
          // Adiciona os elementos no vetor
          // de dados
          this.categorias.push({
            descricao: e.descricao,
            indice: Object.keys(snapshot.val())[i]
          });
        }
      );
      
    });    
  }

  listarSubcategoria(_categoria:string){

    // Limpa a lista de subcategorias
    this.subcategorias.splice(0,this.subcategorias.length);

    this.subcategoriaService.listar()
    .on('value',(snapshot:any) => {

      // Dados retornados do Firebase
      let response = snapshot.val();

      // Não setar valores caso não venha
      // nenhum registro
      if (response == null) return;
      
      Object.values( response )
      .forEach(
        (e:any,i:number) => {
          
          // Indice da subcategoria
          let _indice = Object.keys(snapshot.val())[i];

          // Adiciona os elementos no vetor
          // de dados
          if (_categoria == e.categoria){            
            this.subcategorias.push({
              descricao: e.descricao,
              categoria: e.categoria,
              indice: _indice
            });
          }
        }
      );

      if (this.subcategorias.length > 0){
        this.is_desabilidado = false;
      }else{
        this.is_desabilidado = true;
      }
    });    
  }
}