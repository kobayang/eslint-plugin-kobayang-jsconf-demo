import { RuleTester } from "eslint";
import { RULE, RULE_NAME } from "../sample-rule";

const tester = new RuleTester({
  parser: require.resolve("@typescript-eslint/parser"),
});

tester.run(RULE_NAME, RULE, {
  valid: [],
  invalid: [
    {
      code: `program`,
      errors: [
        {
          message: "some message",
        }
      ]
    }
  ],
});
