import { Rule } from "eslint";

export const RULE_NAME = "use-next-public-env";

export const RULE: Rule.RuleModule = {
  create: (context) => {
    return {
      MemberExpression: (node) => {
        const property = node.property;
        if(property.type !== "Identifier") return;

        const object = node.object;
        if(object.type !== "MemberExpression") return;

        const process = object.object;
        const env = object.property;
        if(process.type === "Identifier" && process.name === "process") {
          if(env.type === "Identifier" && env.name === "env") {
            if(!property.name.startsWith("NEXT_PUBLIC")) {
              context.report({
                message: "環境変数はNEXT_PUBLICから始める",
                node,
              });
            }
          }
        }

      }
    }
  }
};
