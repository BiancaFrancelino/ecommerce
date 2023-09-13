import { Component } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.scss']
})
export class ClienteFormComponent {
  public nome:string = '';
  public dtnascimento:Date = new Date();
  public cpf:string = '';
  public celular:string = '';
  public email:string = '';
  public indice:string = '';
  public nextId:number = 0;

  constructor(
    public clienteService:ClienteService,
    public activated_route:ActivatedRoute,
    public router:Router
  ){
    this.activated_route.params.subscribe((params:any) => {
      if(params.indice === undefined)
        return;

      this.clienteService.ref().child('/' + params.indice).on('value', (snapshot:any) => {
        let dado:any = snapshot.val();
        this.indice = params.indice;
        this.nome = dado.nome;
        this.cpf  = dado.cpf;
        this.email = dado.email;
        this.celular = dado.celular;
        this.dtnascimento = dado.dtnascimento;
      });
    });
  }

  salvar() {
    if(this.nome == '') {
      document.querySelector('#nome')?.classList.add('has-errors');
      return;
    }

    if(this.cpf == '') {
      document.querySelector('#cpf')?.classList.add('has-errors');
      return;
    }

    if(this.dtnascimento == null) {
      document.querySelector('#dtnascimento')?.classList.add('has-errors');
      return;
    }

    if(this.celular == '') {
      document.querySelector('#celular')?.classList.add('has-errors');
      return;
    }

    if(this.email == '') {
      document.querySelector('#email')?.classList.add('has-errors');
      return;
    }

    if(this.indice === '') {
      this.clienteService.salvar({
        nome : this.nome,
        email : this.email,
        cpf : this.cpf,
        celular : this.celular,
        dtnascimento : this.dtnascimento
      })
    }else {
      let dados = {
        nome : this.nome,
        email : this.email,
        cpf : this.cpf,
        celular : this.celular,
        dtnascimento : this.dtnascimento
      };
      this.clienteService.editar(this.indice, dados);
    }
    this.router.navigate(['/cliente']);
  }
}
 