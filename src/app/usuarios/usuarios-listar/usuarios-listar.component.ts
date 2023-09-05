import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-usuarios-listar',
  templateUrl: './usuarios-listar.component.html',
  styleUrls: ['./usuarios-listar.component.scss']
})
export class UsuariosListarComponent implements OnInit{
  public dados:Array<any> = [];
  
  constructor(
    public usuariosService:UsuariosService,
    public router:Router
  ){}

  ngOnInit(): void {
    this.usuariosService.listar()
    .on('value',(snapshot:any) => {
      this.dados.splice(0,this.dados.length);

      console.log( snapshot.val); 
      let response = snapshot.val();
      if (response == null) return;  
      
      Object.values( response )
      .forEach(
        (e:any,i:number) => {
          this.dados.push({
            descricao: e.descricao,
            email: e.email,
            senha: e.senha,
            indice: Object.keys(snapshot.val())[i]
          });
        }
      );
    });
  }
  
  excluir(key:string){
    this.usuariosService.excluir(key);
  }
  
  editar(key:string){
    this.router.navigate(['/usuarios/form/' + key]);
  }
}