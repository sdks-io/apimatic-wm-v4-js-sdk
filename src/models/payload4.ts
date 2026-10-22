import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { meta8Schema, type Meta8 } from "./meta8.js";
import { record5Schema, type Record5 } from "./record5.js";

/** Payload in the response having the details about the item recommendations. */
export type Payload4 = {
  /**
   * Meta information for the response. <br><b style='color:green;'>Market availability: US
   * only</span></b>
   */
  meta?: Meta8;
  /**
   * Item ID of the primary variant item. <br><b style='color:green;'>Market availability: US
   * only</span></b>
   */
  primaryVariantItemId?: string;
  /**
   * Information related to the variant recommendations based on primary variant item ID.<br><b
   * style='color:green;'>Market availability: US only</span></b>
   */
  records?: Record5[];
};

export const payload4Schema: Schema<Payload4> = s.object<Payload4>({
  meta: s.optional(s.lazy(() => meta8Schema)),
  primaryVariantItemId: s.optional(s.string()),
  records: s.optional(s.array(s.lazy(() => record5Schema))),
});
