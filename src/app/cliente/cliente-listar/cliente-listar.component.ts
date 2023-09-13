import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-listar',
  templateUrl: './cliente-listar.component.html',
  styleUrls: ['./cliente-listar.component.scss']
})
export class ClienteListarComponent implements OnInit{
  public dados:Array<any> = [];
  
  constructor(
    public clienteService:ClienteService,
    public router:Router
  ){}

  ngOnInit(): void {
    this.clienteService.listar()
    .on('value',(snapshot:any) => {
      this.dados.splice(0,this.dados.length);

      console.log( snapshot.val); 
      let response = snapshot.val();
      if (response == null) return;  
      
      Object.values( response )
      .forEach(
        (e:any,i:number) => {
          this.dados.push({
            nome: e.nome,
            cpf: e.cpf,
            email: e.email,
            celular : e.celualr,
            dtnascimento : e.dtnascimento,
            indice: Object.keys(snapshot.val())[i]
          });
        }
      );
    });
  }
  
  excluir(key:string){
    this.clienteService.excluir(key);
  }
  
  editar(key:string){
    this.router.navigate(['/cliente/form/' + key]);
  }
}