import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { meta7Schema, type Meta7 } from "./meta7.js";
import { record4Schema, type Record4 } from "./record4.js";

/** Payload in the response having the details about the item recommendations. */
export type Payload3 = {
  /**
   * | Attribute | Description | Data Type |
   * | --- | ----------- | ------- |
   * | ITEM | To get list of recommended items | string |
   * <br><b style='color:green;'>Market availability: US | CA | MX</span></b>
   *
   * @default "ITEM"
   */
  recommendationType?: "ITEM";
  /** Meta information for the response. */
  meta?: Meta7;
  /** Information related to the item recommendations. */
  records?: Record4[];
};

export const payload3Schema: Schema<Payload3> = s.object<Payload3>({
  recommendationType: s.defaulted(s.literal("ITEM"), "ITEM"),
  meta: s.optional(s.lazy(() => meta7Schema)),
  records: s.optional(s.array(s.lazy(() => record4Schema))),
});
