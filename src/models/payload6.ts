import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { categorizationType3Schema, type CategorizationType3 } from "./categorization-type3.js";
import { meta11Schema, type Meta11 } from "./meta11.js";
import { record6Schema, type Record6 } from "./record6.js";

/** Payload in the response having the categorization details about the item recommendations. */
export type Payload6 = {
  /**
   * | Attribute | Description | Data Type |
   * | --- | ----------- | ------- |
   * | BRAND | To get list of brands which are associated with the assortment recommendations | string |
   * | CATEGORY | To get list of categories which are associated with the assortment recommendations | string |
   *
   * <br><b style='color:green;'>Market availability: US | CA | MX</span></b>
   */
  categorizationType?: CategorizationType3;
  /** Meta information for the response. */
  meta?: Meta11;
  /** Information of item recommendations based on the categorizationType. */
  records?: Record6[];
};

export const payload6Schema: Schema<Payload6> = s.object<Payload6>({
  categorizationType: s.optional(s.lazy(() => categorizationType3Schema)),
  meta: s.optional(s.lazy(() => meta11Schema)),
  records: s.optional(s.array(s.lazy(() => record6Schema))),
});
