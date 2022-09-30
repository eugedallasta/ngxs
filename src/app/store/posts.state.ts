import { Action, State, StateContext } from "@ngxs/store";
import { AgregarPost, EliminarPost } from "./posts.actions";
import { PostStateModel } from "./posts.model";

@State<PostStateModel>({
  name: "posts",
  defaults: {
    listPosts: []
  }
})
export class PostState {
  @Action(AgregarPost) agregar(ctx: StateContext<PostStateModel>, action: AgregarPost) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      listPosts: [...state.listPosts, action.payload]
    });

  }
  @Action(EliminarPost) eliminar(ctx: StateContext<PostStateModel>, action: EliminarPost) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      listPosts: state.listPosts.filter(post => post.id !== action.id)
    });
  }
}
