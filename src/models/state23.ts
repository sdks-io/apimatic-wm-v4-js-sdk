import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * State configuration to which shipping has to be covered with added carriers as part of mentioned
 * sub region area. <br><b style='color:green;'>Market availability: US</span></b>
 */
export type State23 = {
  /**
   * State code for covered shipping. <br><b style='color:green;'>Market availability: US</span></b>
   */
  stateCode?: string;
  /**
   * State name for covered shipping. <br><b style='color:green;'>Market availability: US</span></b>
   */
  stateName?: string;
};

export const state23Schema: Schema<State23> = s.object<State23>({
  stateCode: s.optional(s.string()),
  stateName: s.optional(s.string()),
});
