import { Component } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-form-produtos',
  templateUrl: './form-produtos.component.html',
  styleUrls: ['./form-produtos.component.css']
})
export class FormProdutosComponent {
  produto = new Produto();

  constructor(private produtoService: ProdutoService) {}

  cadastrar() {
    alert(this.produto.nome+" cadastrado com sucesso!");
    this.produtoService.inserir(this.produto);
    this.produto = new Produto();
  }

  
}
