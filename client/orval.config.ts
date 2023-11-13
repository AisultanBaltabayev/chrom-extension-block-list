import { defineConfig } from "orval";

export default defineConfig({
  main: {
    input: "./src/6-shared/api/orval/schema.yaml",
    output: {
      mode: "tags-split",
      target: "src/6-shared/api/orval/",
      schemas: "src/6-shared/api/orval/models",
      prettier: true,
      client: "react-query",
      override: {
        mutator: {
          path: "./src/6-shared/api/api-instance.ts",
          name: "createInstance",
        },
        query: {
          useQuery: true,
          useInfinite: true,
          useMutation: true,
        },
      },
    },
  },
});
