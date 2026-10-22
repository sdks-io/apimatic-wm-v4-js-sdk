import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Specifies the list of rewards.<br><b style='color:green;'>Market availability: US | CA</b> */
export type Reward = {
  /**
   * Specifies name of the eligible reward.<br><b style='color:green;'>Market availability: US |
   * CA</b>
   */
  reward?: string;
  /** Indicates reward active status.<br><b style='color:green;'>Market availability: US | CA</b> */
  isRewardActive?: boolean;
  /**
   * Indicates if the reward has been overridden.<br><b style='color:green;'>Market availability: US
   * | CA</b>
   */
  isRewardOverride?: boolean;
  /**
   * Specifies the reward override action (approve or deny).<br><b style='color:green;'>Market
   * availability: US | CA</b>
   */
  rewardOverrideAction?: string;
};

export const rewardSchema: Schema<Reward> = s.object<Reward>({
  reward: s.optional(s.string()),
  isRewardActive: s.optional(s.boolean()),
  isRewardOverride: s.optional(s.boolean()),
  rewardOverrideAction: s.optional(s.string()),
});
