import { Component } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.scss']
})
export class CategoriaFormComponent {
  public descricao:string = '';
  public indice:string = '';
  public nextId:number = 0;

  constructor(
    public categoriaService:CategoriaService,
    public activated_route:ActivatedRoute,
    public router:Router
  ){
    this.activated_route.params.subscribe((params:any) => {
      if(params.indice === undefined)
        return;

      this.categoriaService.ref().child('/' + params.indice).on('value', (snapshot:any) => {
        let dado:any = snapshot.val();
        this.indice = params.indice;
        this.descricao = dado.descricao;
      });
    });
  }

  salvar() {
    if(this.descricao == '') {
      document.querySelector('#descricao')?.classList.add('has-errors');
      return;
    }

    if(this.indice === '') {
      this.categoriaService.salvar({
        descricao : this.descricao
      })
    }else {
      let dados = {
        descricao:this.descricao
      };
      this.categoriaService.editar(this.indice, dados);
    }
    this.router.navigate(['/categoria']);
  }
}
 