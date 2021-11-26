import { RuleTester } from "eslint";
import { RULE, RULE_NAME } from "../sample-rule";

const tester = new RuleTester();

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
