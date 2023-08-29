import { Component } from '@angular/core';
import { CategoriaService } from '../categoria.service';


@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.scss']
})
export class CategoriaFormComponent {
  public descricao:string = '';

  constructor(
    public categoriaService:CategoriaService
  ){}

  salvar(){
    this.categoriaService.salvar({
      descricao:this.descricao
    });
  }
}
