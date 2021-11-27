import { RuleTester } from "eslint";
import { RULE, RULE_NAME } from "../use-next-public-env";

const tester = new RuleTester({
  parser: require.resolve("@typescript-eslint/parser"),
});

tester.run(RULE_NAME, RULE, {
  valid: [
    {
      code: `process.env.NEXT_PUBLIC_ENV`,
    },
    {
      code: `env.ENV`
    },
    {
      code: `ENV`
    }
  ],
  invalid: [
    {
      code: `process.env.ENV`,
      errors: [
        {
          message: "環境変数はNEXT_PUBLICから始める"
        }
      ]
    }
  ],
});
