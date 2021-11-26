"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RULE = exports.RULE_NAME = void 0;
exports.RULE_NAME = "sample-rule";
exports.RULE = {
    meta: {},
    create: (context) => {
        return {
            Program: (node) => {
                context.report({
                    message: "some message",
                    node,
                });
            },
        };
    },
};
