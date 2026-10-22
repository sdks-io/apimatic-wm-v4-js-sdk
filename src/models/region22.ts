import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { subRegion23Schema, type SubRegion23 } from "./sub-region23.js";

/** Region configurations to which shipping has to be covered with added carriers. */
export type Region22 = {
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
  subRegions?: SubRegion23[];
};

export const region22Schema: Schema<Region22> = s.object<Region22>({
  regionCode: s.optional(s.string()),
  regionName: s.optional(s.string()),
  subRegions: s.optional(s.array(s.lazy(() => subRegion23Schema))),
});
