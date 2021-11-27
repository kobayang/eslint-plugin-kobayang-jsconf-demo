"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RULE = exports.RULE_NAME = void 0;
exports.RULE_NAME = "use-next-public-env";
exports.RULE = {
    create: (context) => {
        return {
            MemberExpression: (node) => {
                const property = node.property;
                if (property.type !== "Identifier")
                    return;
                const object = node.object;
                if (object.type !== "MemberExpression")
                    return;
                const process = object.object;
                const env = object.property;
                if (process.type === "Identifier" && process.name === "process") {
                    if (env.type === "Identifier" && env.name === "env") {
                        if (!property.name.startsWith("NEXT_PUBLIC")) {
                            context.report({
                                message: "環境変数はNEXT_PUBLICから始める",
                                node,
                            });
                        }
                    }
                }
            }
        };
    }
};
