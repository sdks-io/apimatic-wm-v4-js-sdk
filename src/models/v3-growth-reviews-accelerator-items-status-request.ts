import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { item9Schema, type Item9 } from "./item9.js";
import { status11Schema, type Status11 } from "./status11.js";

export type V3GrowthReviewsAcceleratorItemsStatusRequest = {
  /**
   * | Attribute | Description | Data Type |
   * | --- | ----------- | ------- |
   * | ENROLL | To enroll items into the program | string |
   * | DISENROLL | To opt out items from the program | string |
   * <br><b style='color:green;'>Market availability: US only</b>
   */
  status: Status11;
  /** Items<br><b style='color:green;'>Market availability: US only</b> */
  items: Item9[];
};

export const v3GrowthReviewsAcceleratorItemsStatusRequestSchema: Schema<V3GrowthReviewsAcceleratorItemsStatusRequest> =
  s.object<V3GrowthReviewsAcceleratorItemsStatusRequest>({
    status: status11Schema,
    items: s.array(s.lazy(() => item9Schema)),
  });
