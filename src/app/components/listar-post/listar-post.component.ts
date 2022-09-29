import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interface/post';

@Component({
  selector: 'app-listar-post',
  templateUrl: './listar-post.component.html',
  styleUrls: ['./listar-post.component.css']
})
export class ListarPostComponent implements OnInit {
  listPosts: Post[] = [
    {
      id: 'grfrfr-fr',
      nombre: 'Post 1',
      descripcion: 'Contenido del post 1',
    },
    {
      id: '2',
      nombre: 'Post 2',
      descripcion: 'Contenido del post 2'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  eliminarPost(id: string) {
    this.listPosts = this.listPosts.filter(post => post.id !== id);
  }

}
