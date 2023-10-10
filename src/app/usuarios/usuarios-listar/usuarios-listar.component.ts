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
    this.listar();
  }

  listar(){
    this.usuariosService.listar().subscribe((dados:any) => {
      this.dados = dados;
    });
  }
  
  excluir(id:number){
    return this.usuariosService.excluir(id).subscribe(()=>{
      this.listar();
    });
  }
  
  editar(key:string){
    this.router.navigate(['/usuarios/form/' + key]);
  }
}