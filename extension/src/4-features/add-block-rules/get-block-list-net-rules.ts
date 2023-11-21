import {
  NetRule,
  NetRuleActionType,
  NetRuleResourceType,
} from "@/6-shared/lib/browser.ts";
import { blockListControllerGetList } from "@/6-shared/api/orval/block-list/block-list.ts";
import { BlockItemDtoType } from "@/6-shared/api/orval/models";

export async function getBlockListNetRules() {
  const blockList = await blockListControllerGetList();

  return blockList.items
    .filter((item) => item.type === BlockItemDtoType.Website)
    .map(
      (item): NetRule => ({
        id: item.id,
        action: { type: NetRuleActionType.BLOCK },
        condition: item.data.startsWith("regexp:")
          ? {
              regexFilter: item.data.replace("regexp:", ""),
              resourceTypes: [NetRuleResourceType.MAIN_FRAME],
            }
          : {
              urlFilter: item.data,
              resourceTypes: [NetRuleResourceType.MAIN_FRAME],
            },
      }),
    );
}
