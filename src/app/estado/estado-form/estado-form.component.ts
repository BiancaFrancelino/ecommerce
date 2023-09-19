import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EstadoService } from '../estado.service';

@Component({
  selector: 'app-estado-form',
  templateUrl: './estado-form.component.html',
  styleUrls: ['./estado-form.component.scss']
})
export class EstadoFormComponent {
  public sigla:string = '';
  public nome:string = '';
  public indice:string = '';
  public nextId:number = 0;

  constructor(
    public estadoService:EstadoService,
    public activated_route:ActivatedRoute,
    public router:Router
  ){
    this.activated_route.params.subscribe((params:any) => {
      if(params.indice === undefined)
        return;

      this.estadoService.ref().child('/' + params.indice).on('value', (snapshot:any) => {
        let dado:any = snapshot.val();
        this.indice = params.indice;
        this.nome = dado.nome;
        this.sigla = dado.sigla;
      });
    });
  }

  salvar() {
    if(this.nome == '') {
      document.querySelector('#nome')?.classList.add('has-errors');
      return;
    }

    if(this.sigla == '') {
      document.querySelector('#sigla')?.classList.add('has-errors');
      return;
    }

    if(this.indice === '') {
      this.estadoService.salvar({
        sigla : this.sigla,
        nome : this.nome
      })
    }else {
      let dados = {
        sigla : this.sigla,
        nome : this.nome
      };
      this.estadoService.editar(this.indice, dados);
    }
    this.router.navigate(['/estado']);
  }
}
 