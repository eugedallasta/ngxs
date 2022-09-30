import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Post } from 'src/app/interface/post';
import { EliminarPost } from 'src/app/store/posts.actions';

@Component({
  selector: 'app-listar-post',
  templateUrl: './listar-post.component.html',
  styleUrls: ['./listar-post.component.css']
})
export class ListarPostComponent implements OnInit {

  post$: Observable<Post[]>;

  constructor(private store: Store, private toastr: ToastrService) {
    this.post$ = this.store.select(state => state.posts.listPosts);
  }


  ngOnInit(): void {
  }

  eliminarPost(id: string) {
    this.store.dispatch(new EliminarPost(id));
    this.toastr.info('Post eliminado correctamente', 'Eliminado');
  }

}
