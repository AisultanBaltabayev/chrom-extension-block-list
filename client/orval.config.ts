import { defineConfig } from "orval";

export default defineConfig({
  main: {
    input: "./src/shared/api/orval/schema.yaml",
    output: {
      mode: "tags-split",
      target: "src/shared/api/orval/",
      schemas: "src/shared/api/orval/models",
      prettier: true,
      client: "react-query",
      override: {
        mutator: {
          path: "./src/shared/api/api-instance.ts",
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
