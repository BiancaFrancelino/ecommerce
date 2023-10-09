import { Injectable } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { RequisicaoService } from '../requisicao/requisicao.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
    public requisicao_service:RequisicaoService
  ) { }

  salvar(fd:any) {
    return this.requisicao_service.post(fd, 'usuarios');
  }
  
  listar() {
    return this.requisicao_service.get('/usuarios/listar');
  }
  
  excluir(id:number){
    return this.requisicao_service.delete('/usuarios/'+id);
  }
  
  editar(fd: any, indice:string) {
    return this.requisicao_service.put(fd, '/usuarios/');
  }
}
