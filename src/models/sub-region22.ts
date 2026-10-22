import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { state23Schema, type State23 } from "./state23.js";

/**
 * Sub region configurations to which shipping has to be covered with added carriers. <br><b
 * style='color:green;'>Market availability: US</span></b>
 */
export type SubRegion22 = {
  /**
   * Sub region code for covered shipping. <br><b style='color:green;'>Market availability:
   * US</span></b>
   */
  subRegionCode?: string;
  /**
   * Sub region name for covered shipping. <br><b style='color:green;'>Market availability:
   * US</span></b>
   */
  subRegionName?: string;
  /**
   * State configuration to which shipping has to be covered with added carriers as part of
   * mentioned sub region area. <br><b style='color:green;'>Market availability: US</span></b>
   */
  states?: State23[];
};

export const subRegion22Schema: Schema<SubRegion22> = s.object<SubRegion22>({
  subRegionCode: s.optional(s.string()),
  subRegionName: s.optional(s.string()),
  states: s.optional(s.array(s.lazy(() => state23Schema))),
});
