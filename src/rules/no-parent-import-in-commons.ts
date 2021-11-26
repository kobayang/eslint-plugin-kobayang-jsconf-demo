import { Rule } from "eslint";

export const RULE_NAME = "no-parent-import-in-commons";

export const RULE: Rule.RuleModule = {
  meta: {
    docs: {
      description: "commons ディレクトリにあるファイルは親のimportを許可しない",
    },
  },
  create: (context) => {
    return {};
  },
};
