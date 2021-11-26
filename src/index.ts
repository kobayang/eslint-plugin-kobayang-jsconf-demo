import * as DEMO_RULE from "./rules/sample-rule";
import * as NO_PARENT_IMPORT_IN_COMMONS from "./rules/no-parent-import-in-commons";

export const rules = {
  [DEMO_RULE.RULE_NAME]: DEMO_RULE.RULE,
  [NO_PARENT_IMPORT_IN_COMMONS.RULE_NAME]: NO_PARENT_IMPORT_IN_COMMONS.RULE,
};
