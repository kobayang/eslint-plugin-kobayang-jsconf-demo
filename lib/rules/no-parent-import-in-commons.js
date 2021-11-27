"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RULE = exports.RULE_NAME = void 0;
/**
 * filename が commons ディレクトリ内にあるかどうか
 * @param filename パスも含んだ filename.
 * @returns
 */
const isFileInCommonsDir = (filename) => {
    const regexp = new RegExp(/\/commons\//);
    return regexp.test(filename);
};
/**
 * path が 親ディレクトリを含んでいるかどうか
 * @param importSource import元のファイルまたはmodule.
 * @returns
 */
const includesParentPath = (importSource) => {
    // `../` の文字列を含んでいるかどうかで簡易的に判定する
    const regexp = new RegExp(/\.\.\//);
    return regexp.test(importSource);
};
exports.RULE_NAME = "no-parent-import-in-commons";
exports.RULE = {
    meta: {
        docs: {
            description: "commons ディレクトリにあるファイルは親のimportを許可しない",
        },
    },
    create: (context) => {
        const filename = context.getFilename();
        if (!isFileInCommonsDir(filename))
            return {};
        return {
            ImportDeclaration: (node) => {
                const value = node.source.value;
                if (typeof value !== "string")
                    return;
                if (includesParentPath(value)) {
                    context.report({
                        message: "共通ディレクトリでは親から参照をしない",
                        node,
                    });
                }
            },
        };
    },
};
