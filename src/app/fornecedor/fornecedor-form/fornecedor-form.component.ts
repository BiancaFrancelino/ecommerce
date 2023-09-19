import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EstadoService } from 'src/app/estado/estado.service';
import { FornecedorService } from '../fornecedor.service';

@Component({
  selector: 'app-fornecedor-form',
  templateUrl: './fornecedor-form.component.html',
  styleUrls: ['./fornecedor-form.component.scss']
})
export class FornecedorFormComponent {
  public indice:string    = '';
  public nomeFantasia:string = '';
  public razaoSocial:string = '';
  public cnpj:string = '';
  public contato:string = '';
  public email:string = '';
  public logradouro:string = '';
  public complemento:string = '';
  public bairro:string = '';
  public cidade:string = '';
  public estado:string = '';
  public is_desabilidado:boolean = true;

  constructor(
    public fornecedorService:FornecedorService,
    public activated_route:ActivatedRoute,
    public router:Router,
    public estadoService:EstadoService
  ){
    this.activated_route.params.subscribe((params:any) => {
        if (params.indice == undefined) 
        return;

        this.fornecedorService.ref()
        .child('/' + params.indice)
        .on('value',(snapshot:any) => {
          let dado:any    = snapshot.val();
          this.indice     = params.indice;
          this.nomeFantasia  = dado.nomeFantasia;
          this.razaoSocial  = dado.razaoSocial;
          this.cnpj  = dado.cnpj;
          this.contato = dado.contato;
          this.email = dado.email;
          this.logradouro = dado.logradouro;
          this.complemento = dado.complemento;
          this.bairro = dado.bairro;
          this.cidade = dado.cidade;
          this.estado = dado.estado;
        });
      }
    );
  }

  salvar() {

    if(this.nomeFantasia == '') {
      document.querySelector('#nomeFantasia')?.classList.add('has-errors');
      return;
    }

    if(this.razaoSocial == '') {
      document.querySelector('#razaoSocial')?.classList.add('has-errors');
      return;
    }

    if(this.cnpj == '') {
      document.querySelector('#cnpj')?.classList.add('has-errors');
      return;
    }

    if(this.contato == '') {
      document.querySelector('#contato')?.classList.add('has-errors');
      return;
    }

    if(this.email == '') {
      document.querySelector('#email')?.classList.add('has-errors');
      return;
    }

    if(this.logradouro == '') {
      document.querySelector('#logradouro')?.classList.add('has-errors');
      return;
    }

    if(this.complemento == '') {
      document.querySelector('#complemento')?.classList.add('has-errors');
      return;
    }

    if(this.bairro == '') {
      document.querySelector('#bairro')?.classList.add('has-errors');
      return;
    }

    if(this.cidade == '') {
      document.querySelector('#cidade')?.classList.add('has-errors');
      return;
    }

    if(this.estado == '') {
      document.querySelector('#estado')?.classList.add('has-errors');
      return;
    }else{
      document.querySelector('#estado')?.classList.remove('has-errors');    
    }

    if(this.indice === '') {
      this.fornecedorService.salvar({
        nomeFantasia : this.nomeFantasia,
        razaoSocial  : this.razaoSocial,
        cnpj  : this.cnpj,
        contato : this.contato,
        email : this.email,
        logradouro : this.logradouro,
        complemento : this.complemento,
        bairro : this.bairro,
        cidade : this.cidade,
        estado : this.estado
      })
    }else {
      let dados = {
        nomeFantasia : this.nomeFantasia,
        razaoSocial  : this.razaoSocial,
        cnpj  : this.cnpj,
        contato : this.contato,
        email : this.email,
        logradouro : this.logradouro,
        complemento : this.complemento,
        bairro : this.bairro,
        cidade : this.cidade,
        estado : this.estado
      };
      this.fornecedorService.editar(this.indice, dados);
    }
    this.router.navigate(['/fornecedor']);
  }

  ngOnInit(): void{
    this.listarEstado();
  }

  private listarEstado() {
    this.estadoService.listar()
      .on('value', (snapshot:any) => {
        let response = snapshot.val();
        let selectEstado = document.querySelector("#estado");
  
        if (response == null) return;
        Object.values( response )
          .forEach(
            (e:any, i:number) => {
              let option = document.createElement('option');
              option.value = Object.keys(snapshot.val())[i];
              option.innerHTML = e.sigla;
              selectEstado?.append(option);
            }
          );
      });
  }
}

 