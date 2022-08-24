import {
  createAction,
  createSlice,
  nanoid,
  PayloadAction,
} from "@reduxjs/toolkit";
import { Post } from "../../../type/post";
import { RootState } from "../../store";

interface PostState {
  posts: Post[];
}
const initialState: PostState = {
  posts: [],
};
const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    fetchAllSucceed(state, action: PayloadAction<Post[]>) {
      state.posts = action.payload;
    },
  },
});

const postAction = {
  create: createAction(`${postSlice.name}/create`, (post: Post) => ({
    payload: { id: nanoid(), title: post.title, body: post.body },
  })),
  fetchAll: createAction(`${postSlice.name}/fetchAll`),
  fetchAllSucceed: postSlice.actions.fetchAllSucceed,
};
const selectPost = (state: RootState) => state.posts;

export { postSlice, postAction, selectPost };

export default postSlice.reducer;
