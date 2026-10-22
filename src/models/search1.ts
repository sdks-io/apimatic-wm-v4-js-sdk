import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { field42Schema, type Field42 } from "./field42.js";

/** Search request.<br><b style='color:green;'>Market availability: US only</b> */
export type Search1 = {
  /**
   * | Attribute | Description | Data Type |
   * | --- | ----------- | ------- |
   * | ITEM_NAME | Product name | string |
   * | SKU | Specifies the item identified. This value is defined by the seller. | string |
   * <br><b style='color:green;'>Market availability: US only</b>
   */
  field?: Field42;
  /** <br><b style='color:green;'>Market availability: US only</b> */
  value?: string;
};

export const search1Schema: Schema<Search1> = s.object<Search1>({
  field: s.optional(s.lazy(() => field42Schema)),
  value: s.optional(s.string()),
});
