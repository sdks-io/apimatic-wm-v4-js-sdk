import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { field6Schema, type Field6 } from "./field6.js";

/** Search request. */
export type SearchRequest = {
  /**
   * | Attribute | Description | Data Type |
   * | --- | ----------- | ------- |
   * | ITEM_NAME | Product name | string |
   * | SKU | Specifies the item identified. This value is defined by the seller. | string |
   */
  field?: Field6;
  value?: string;
};

export const searchRequestSchema: Schema<SearchRequest> = s.object<SearchRequest>({
  field: s.optional(s.lazy(() => field6Schema)),
  value: s.optional(s.string()),
});
