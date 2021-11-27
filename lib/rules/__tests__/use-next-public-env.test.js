"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const eslint_1 = require("eslint");
const use_next_public_env_1 = require("../use-next-public-env");
const tester = new eslint_1.RuleTester({
    parser: require.resolve("@typescript-eslint/parser"),
});
tester.run(use_next_public_env_1.RULE_NAME, use_next_public_env_1.RULE, {
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
