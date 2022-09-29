import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interface/post';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-nuevo-post',
  templateUrl: './nuevo-post.component.html',
  styleUrls: ['./nuevo-post.component.css']
})
export class NuevoPostComponent implements OnInit {

  nombre: string = '';
  descripcion: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  agregarPost() {
    //creamos un objeto de tipo post
    const post: Post = {
      id: uuidv4(),
      nombre: this.nombre,
      descripcion: this.descripcion
    }
    //resetiamos el formulario
    this.nombre = '';
    this.descripcion = '';
  }

}
