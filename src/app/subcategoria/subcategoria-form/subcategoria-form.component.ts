import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubcategoriaService } from '../subcategoria.service';

@Component({
  selector: 'app-subcategoria-form',
  templateUrl: './subcategoria-form.component.html',
  styleUrls: ['./subcategoria-form.component.scss']
})
export class SubcategoriaFormComponent {
  public descricao:string = '';
  public indice:string = '';
  public nextId:number = 0;

  constructor(
    public subcategoriaService:SubcategoriaService,
    public activated_route:ActivatedRoute,
    public router:Router
  ){
    this.activated_route.params.subscribe((params:any) => {
      if(params.indice === undefined)
        return;

      this.subcategoriaService.ref().child('/' + params.indice).on('value', (snapshot:any) => {
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
      this.subcategoriaService.salvar({
        descricao : this.descricao
      })
    }else {
      let dados = {
        descricao:this.descricao
      };
      this.subcategoriaService.editar(this.indice, dados);
    }
    this.router.navigate(['/subcategoria']);
  }
}
 