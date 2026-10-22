import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error5Schema, type Error5 } from "./error5.js";
import { header2Schema, type Header2 } from "./header2.js";
import { payload14Schema, type Payload14 } from "./payload14.js";

export type V3PromoSkuResponse = {
  payload?: Payload14;
  /** <br><b style='color:green;'>Market availability: Global</b> */
  header?: Header2;
  /** <br><b style='color:green;'>Market availability: Global</b> */
  status?: string;
  /** <br><b style='color:green;'>Market availability: Global</b> */
  errors?: Error5[];
};

export const v3PromoSkuResponseSchema: Schema<V3PromoSkuResponse> = s.object<V3PromoSkuResponse>({
  payload: s.optional(s.lazy(() => payload14Schema)),
  header: s.optional(s.lazy(() => header2Schema)),
  status: s.optional(s.string()),
  errors: s.optional(s.array(s.lazy(() => error5Schema))),
});
