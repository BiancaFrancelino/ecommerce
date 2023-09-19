import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstadoService } from 'src/app/estado/estado.service';
import { FornecedorService } from '../fornecedor.service';

@Component({
  selector: 'app-fornecedor-listar',
  templateUrl: './fornecedor-listar.component.html',
  styleUrls: ['./fornecedor-listar.component.scss']
})
export class FornecedorListarComponent implements OnInit{
  public dados:Array<any> = [];
  public descricaoEstado:string = '';
  
  constructor(
    public fornecedorService:FornecedorService,
    public router:Router,
    public estadoService:EstadoService
  ){}

  ngOnInit(): void {
    this.fornecedorService.listar()
    .on('value',(snapshot:any) => {
      this.dados.splice(0,this.dados.length);

      let response = snapshot.val();
      if (response == null) return;  
      
      Object.values( response )
      .forEach(
        async (e:any,i:number) => {
          let estado:any = await this.estadoService.getByIndice(e.estado);

          this.dados.push({
            nomeFantasia: e.nomeFantasia,
            razaoSocial: e.razaoSocial,
            cnpj:e.cnpj,
            contato:e.contato,
            email:e.email,
            logradouro:e.logradouro,
            complemento:e.complemento,
            bairro:e.bairro,
            cidade:e.cidade,
            estado: estado.sigla,
            indice: Object.keys(snapshot.val())[i]
          });
        }
      );
    });
  }
  
  excluir(key:string){
    this.fornecedorService.excluir(key);
  }
  
  editar(key:string){
    this.router.navigate(['/fornecedor/form/' + key]);
  }
}