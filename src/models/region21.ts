import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { subRegion22Schema, type SubRegion22 } from "./sub-region22.js";

/**
 * Region configurations to which shipping has to be covered with added carriers. <br><b
 * style='color:green;'>Market availability: US</span></b>
 */
export type Region21 = {
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
  subRegions?: SubRegion22[];
};

export const region21Schema: Schema<Region21> = s.object<Region21>({
  regionCode: s.optional(s.string()),
  regionName: s.optional(s.string()),
  subRegions: s.optional(s.array(s.lazy(() => subRegion22Schema))),
});
