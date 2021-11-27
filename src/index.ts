import * as DEMO_RULE from "./rules/sample-rule";
import * as NO_PARENT_IMPORT_IN_COMMONS from "./rules/no-parent-import-in-commons";
import * as USE_NEXT_PUBLIC_ENV from "./rules/use-next-public-env";

export const rules = {
  [DEMO_RULE.RULE_NAME]: DEMO_RULE.RULE,
  [NO_PARENT_IMPORT_IN_COMMONS.RULE_NAME]: NO_PARENT_IMPORT_IN_COMMONS.RULE,
  [USE_NEXT_PUBLIC_ENV.RULE_NAME]: USE_NEXT_PUBLIC_ENV.RULE,
};
