import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { subRegion20Schema, type SubRegion20 } from "./sub-region20.js";

/** Region configurations to which shipping has to be covered with added carriers. */
export type Region19 = {
  /**
   * Region code for covered shipping. <br><b style='color:green;'>Market availability:
   * US</span></b>
   */
  regionCode?: string;
  /**
   * Region name for covered shipping. <br><b style='color:green;'>Market availability:
   * US</span></b>
   */
  regionName?: string;
  /**
   * Sub region configurations to which shipping has to be covered with added carriers. <br><b
   * style='color:green;'>Market availability: US</span></b>
   */
  subRegions?: SubRegion20[];
};

export const region19Schema: Schema<Region19> = s.object<Region19>({
  regionCode: s.optional(s.string()),
  regionName: s.optional(s.string()),
  subRegions: s.optional(s.array(s.lazy(() => subRegion20Schema))),
});
