import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-listar',
  templateUrl: './categoria-listar.component.html',
  styleUrls: ['./categoria-listar.component.scss']
})
export class CategoriaListarComponent implements OnInit{
  public dados:Array<any> = [];
  
  constructor(
    public categoriaService:CategoriaService
  ){}

  ngOnInit(): void {
    this.categoriaService.listar()
    .on('value',(snapshot:any) => {
        this.dados = Object.values(snapshot.val());
    });
  }
}
