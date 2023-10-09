import { Component } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usuarios-form',
  templateUrl: './usuarios-form.component.html',
  styleUrls: ['./usuarios-form.component.scss']
})
export class UsuariosFormComponent {
  public descricao:string = '';
  public email:string = '';
  public senha:string = '';
  public indice:string = '';
  public nextId:number = 0;

  constructor(
    public usuariosService:UsuariosService,
    public activated_route:ActivatedRoute,
    public router:Router
  ){
    /*this.activated_route.params.subscribe((params:any) => {
      if(params.indice === undefined)
        return;

      this.usuariosService.ref().child('/' + params.indice).on('value', (snapshot:any) => {
        let dado:any = snapshot.val();
        this.indice = params.indice;
        this.email = dado.email;
        this.senha = dado.senha;
      });
    });*/
  }

  salvar() {
    if(this.descricao == '') {
      document.querySelector('#descricao')?.classList.add('has-errors');
      return;
    }

    if(this.email == '') {
      document.querySelector('#email')?.classList.add('has-errors');
      return;
    }

    if(this.senha == '') {
      document.querySelector('#senha')?.classList.add('has-errors');
      return;
    }

    let dados = {
      senha : this.senha,
      email : this.email,
      descricao : this.descricao
    };

    let resultado = null;

    if(this.indice === '') {      
      resultado = this.usuariosService.salvar(dados).subscribe();
    }else {
      this.usuariosService.editar(dados,this.indice);
    }

    console.log(resultado);

    //this.router.navigate(['/usuarios']);
  }
}
 