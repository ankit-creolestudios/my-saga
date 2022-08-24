import { SagaIterator } from "redux-saga";
import { call, put, takeEvery } from "redux-saga/effects";
import { createPost, getAllPost } from "../../api";
import { Post } from "../../type/post";
import { postAction } from "../feature/postSlice";
function* onGetPost(): SagaIterator {
  const posts: Post[] = yield call(getAllPost);
  yield put(postAction.fetchAllSucceed);
}
function* onCreatePost({
  payload,
}: {
  type: typeof postAction.create;
  payload: Post;
}): SagaIterator {
  yield call(createPost, payload);
  yield put(postAction.fetchAll());
}
function* postSaga(): SagaIterator {
  yield takeEvery(postAction.fetchAll.type, onGetPost);
}
export default postSaga;
