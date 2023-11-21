import { setBrowserInterval, setNetRules } from "@/6-shared/lib/browser.ts";
import { authControllerGetSessionInfo } from "@/6-shared/api/orval/auth/auth.ts";
import { accountControllerGetAccount } from "@/6-shared/api/orval/account/account.ts";
import { getBlockListNetRules } from "@/4-features/add-block-rules/get-block-list-net-rules.ts";

export function startUpdateBlockRules() {
  setBrowserInterval("update-block-rules", 5 * 1000, async () => {
    const isAuth = authControllerGetSessionInfo().then(
      () => true,
      () => false,
    );

    if (!isAuth) {
      return await setNetRules([]);
    }

    const isBlockingEnabled = accountControllerGetAccount().then(
      (r) => r.isBlockingEnabled,
    );

    if (!isBlockingEnabled) {
      return await setNetRules([]);
    }

    const rules = await getBlockListNetRules();

    await setNetRules(rules);
  });
}
