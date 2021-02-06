import {
  intArg,
  mutationType,
  nonNull,
  objectType,
  queryType,
  stringArg,
} from "nexus";

export const Post = objectType({
  name: "Post",
  definition(t) {
    t.model.id();
    t.model.title();
    t.model.comments();
  },
});

export const Comment = objectType({
  name: "Comment",
  definition(t) {
    t.model.id();
    t.model.info();
    t.model.post();
    t.model.postId();
  },
});

export const Query = queryType({
  definition(t) {
    t.crud.post();
    t.crud.posts();
  },
});

export const Mutation = mutationType({
  definition(t) {
    t.crud.createOnePost();
    t.crud.createOneComment();
  },
});
