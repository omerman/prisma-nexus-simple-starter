// tests/Post.test.ts
import { createTestContext } from "./__helpers";
const ctx = createTestContext();
it("can create one post", async () => {
  const draftResult = await ctx.client.request(`            # 1
    mutation {
      createOnePost(data: { title: "Test_Post1" }) {            # 2
        id
        title
      }
    }
  `);

  expect(draftResult).toMatchInlineSnapshot(`
    Object {
      "createOnePost": Object {
        "id": 1,
        "title": "Test_Post1",
      },
    }
  `);

  const persistedData = await ctx.db.post.findMany();

  expect(persistedData).toMatchInlineSnapshot(`
    Array [
      Object {
        "id": 1,
        "title": "Test_Post1",
      },
    ]
  `);
});
