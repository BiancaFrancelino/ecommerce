import { Component } from '@angular/core';
import { CondpagService } from '../condpag.service';

@Component({
  selector: 'app-condpag-form',
  templateUrl: './condpag-form.component.html',
  styleUrls: ['./condpag-form.component.scss']
})
export class CondpagFormComponent {
  public descricao:string = '';

  constructor(
    public condpagService:CondpagService
  ){}

  salvar(){
    this.condpagService.salvar({
      descricao:this.descricao
    });
  }
}
