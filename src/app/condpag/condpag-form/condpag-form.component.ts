import { Component } from '@angular/core';
import { CondpagService } from '../condpag.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-condpag-form',
  templateUrl: './condpag-form.component.html',
  styleUrls: ['./condpag-form.component.scss']
})
export class CondpagFormComponent {
  public descricao:string = '';
  public indice:string = '';
  public nextId:number = 0;

  constructor(
    public condpagService:CondpagService,
    public activated_route:ActivatedRoute,
    public router:Router
  ){
    this.activated_route.params.subscribe((params:any) => {
      if(params.indice === undefined)
        return;

      this.condpagService.ref().child('/' + params.indice).on('value', (snapshot:any) => {
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
      this.condpagService.salvar({
        descricao : this.descricao
      })
    }else {
      let dados = {
        descricao:this.descricao
      };
      this.condpagService.editar(this.indice, dados);
    }
    this.router.navigate(['/condpag']);
  }
}
 