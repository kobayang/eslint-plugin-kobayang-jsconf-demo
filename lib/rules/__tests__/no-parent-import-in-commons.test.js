"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const eslint_1 = require("eslint");
const no_parent_import_in_commons_1 = require("../no-parent-import-in-commons");
const tester = new eslint_1.RuleTester({
    parser: require.resolve("@typescript-eslint/parser"),
});
tester.run(no_parent_import_in_commons_1.RULE_NAME, no_parent_import_in_commons_1.RULE, {
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
