import type { Rule } from "eslint";

export const RULE_NAME = "sample-rule";

export const RULE: Rule.RuleModule = {
  meta: {},
  create: (context) => {
    return {
      Program: (node) => {
        context.report({
          message: "some message",
          node,
        })
      },
    };
  },
};
