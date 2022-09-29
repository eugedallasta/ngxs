import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interface/post';
import { v4 as uuidv4 } from 'uuid';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nuevo-post',
  templateUrl: './nuevo-post.component.html',
  styleUrls: ['./nuevo-post.component.css']
})
export class NuevoPostComponent implements OnInit {

  nombre: string = '';
  descripcion: string = '';

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  agregarPost() {
    //validar que los campos no esten vacios
    if (this.nombre === '' || this.descripcion === '') {
      this.toastr.error('Los campos no pueden estar vacios', 'Error');
      return;
    }
    //creamos un objeto de tipo post
    const post: Post = {
      id: uuidv4(),
      nombre: this.nombre,
      descripcion: this.descripcion
    }
    //mostramos mensaje de exito
    this.toastr.success(`El post ${this.nombre.toLocaleUpperCase} se agregó exitosamente!`, 'Post agregado!');
    //resetiamos el formulario
    this.resetForm();
  }

  resetForm() {
    this.nombre = '';
    this.descripcion = '';
  }

}
