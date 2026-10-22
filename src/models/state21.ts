import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * State configuration to which shipping has to be covered with added carriers as part of mentioned
 * sub region area.
 */
export type State21 = {
  /**
   * State code for covered shipping. <br><b style='color:green;'>Market availability: US</span></b>
   */
  stateCode?: string;
  /**
   * State name for covered shipping. <br><b style='color:green;'>Market availability: US</span></b>
   */
  stateName?: string;
};

export const state21Schema: Schema<State21> = s.object<State21>({
  stateCode: s.optional(s.string()),
  stateName: s.optional(s.string()),
});
