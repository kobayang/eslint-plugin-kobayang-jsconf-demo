import { RuleTester } from "eslint";
import { RULE, RULE_NAME } from "../no-parent-import-in-commons";

const tester = new RuleTester({
  parser: require.resolve("@typescript-eslint/parser"),
});

tester.run(RULE_NAME, RULE, {
  valid: [
    {
      code: `import Module from "module"`,
      filename: "/commons/file.ts",
    },
    {
      code: `import Module from "./module"`,
      filename: "/commons/file.ts",
    },
    {
      code: `import Module from "../module"`,
      filename: "/no-commons/file.ts",
    }
  ],
  invalid: [
    {
      code: `import Module from "../module"`,
      filename: "/commons/file.ts",
      errors: [
        {
          message: "共通ディレクトリでは親から参照をしない",
        }
      ]
    }
  ],
});
