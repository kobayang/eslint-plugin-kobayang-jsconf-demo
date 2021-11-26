"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const eslint_1 = require("eslint");
const sample_rule_1 = require("../sample-rule");
const tester = new eslint_1.RuleTester({
    parser: require.resolve("@typescript-eslint/parser"),
});
tester.run(sample_rule_1.RULE_NAME, sample_rule_1.RULE, {
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
