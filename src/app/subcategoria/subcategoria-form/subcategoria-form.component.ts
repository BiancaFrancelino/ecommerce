import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubcategoriaService } from '../subcategoria.service';
import { CategoriaService } from 'src/app/categoria/categoria.service';

@Component({
  selector: 'app-subcategoria-form',
  templateUrl: './subcategoria-form.component.html',
  styleUrls: ['./subcategoria-form.component.scss']
})
export class SubcategoriaFormComponent {
  public descricao:string = '';
  public indice:string = '';
  public categoria:string = '';

  constructor(
    public subcategoriaService:SubcategoriaService,
    public activated_route:ActivatedRoute,
    public router:Router,
    public categoriaService:CategoriaService
  ){
    this.activated_route.params.subscribe((params:any) => {
      if(params.indice === undefined)
        return;

      this.subcategoriaService.ref().child('/' + params.indice).on('value', (snapshot:any) => {
        let dado:any = snapshot.val();
        this.indice = params.indice;
        this.descricao = dado.descricao;
        this.categoria = dado.categoria;
      });
    });
  }

  salvar() {

    if(this.categoria == '') {
      document.querySelector('#categoria')?.classList.add('has-errors');
      return;
    }else{
      document.querySelector('#categoria')?.classList.remove('has-errors');    
    }

    if(this.descricao == '') {
      document.querySelector('#descricao')?.classList.add('has-errors');
      return;
    }

    if(this.indice === '') {
      this.subcategoriaService.salvar({
        descricao : this.descricao,
        categoria : this.categoria
      })
    }else {
      let dados = {
        descricao:this.descricao,
        categoria:this.categoria
      };
      this.subcategoriaService.editar(this.indice, dados);
    }
    this.router.navigate(['/subcategoria']);
  }

  ngOnInit(): void{
    this.preencheSelectCategorias();
  }

  private preencheSelectCategorias() {
    this.categoriaService.listar()
      .on('value', (snapshot:any) => {
        let response = snapshot.val();
        let selectCategoria = document.querySelector("#categoria");
  
        if (response == null) return;
        Object.values( response )
          .forEach(
            (e:any, i:number) => {
              let option = document.createElement('option');
              option.value = Object.keys(snapshot.val())[i];
              option.innerHTML = e.descricao;
              selectCategoria?.append(option);
            }
          );
      });
  }
}
 