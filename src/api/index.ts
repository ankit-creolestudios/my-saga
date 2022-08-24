import { Post } from "../type/post";
import makeApi from "./axiosConfig";
const api = makeApi(`https://jsonplaceholder.typicode.com`);
const uri = "/posts";

const getAllPost = (): Promise<Post[]> => api.get(uri);

const createPost = (post: Post): Promise<Post> => api.post(uri, post);

export { getAllPost, createPost };
