import { Rule } from "eslint";

/**
 * filename が commons ディレクトリ内にあるかどうか
 * @param filename パスも含んだ filename.
 * @returns
 */
const isFileInCommonsDir = (filename: string): boolean => {
  const regexp = new RegExp(/\/commons\//)
  return regexp.test(filename);
};

/**
 * path が 親ディレクトリを含んでいるかどうか
 * @param importSource import元のファイルまたはmodule.
 * @returns
 */
const includesParentPath = (importSource: string): boolean => {
  // `../` の文字列を含んでいるかどうかで簡易的に判定する
  const regexp = new RegExp(/\.\.\//);
  return regexp.test(importSource);
}

export const RULE_NAME = "no-parent-import-in-commons";

export const RULE: Rule.RuleModule = {
  meta: {
    docs: {
      description: "commons ディレクトリにあるファイルは親のimportを許可しない",
    },
  },
  create: (context) => {
    const fileName = context.getFilename();
    if(!isFileInCommonsDir(fileName)) {
      return {};
    }
    return {
      ImportDeclaration: (node) => {
        const sourceName = node.source.value;
        if(typeof sourceName !== "string") return;
        if(!includesParentPath(sourceName)) return;
        context.report({
          message: "共通ディレクトリでは親から参照をしない",
          node,
        });
      },
    };
  },
};
