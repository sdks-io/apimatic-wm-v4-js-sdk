import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { state21Schema, type State21 } from "./state21.js";

/** Sub region configurations to which shipping has to be covered with added carriers. */
export type SubRegion23 = {
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
  states?: State21[];
};

export const subRegion23Schema: Schema<SubRegion23> = s.object<SubRegion23>({
  subRegionCode: s.optional(s.string()),
  subRegionName: s.optional(s.string()),
  states: s.optional(s.array(s.lazy(() => state21Schema))),
});
