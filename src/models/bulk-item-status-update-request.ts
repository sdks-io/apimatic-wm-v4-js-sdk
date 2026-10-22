import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { itemsRequestSchema, type ItemsRequest } from "./items-request.js";
import { status1Schema, type Status1 } from "./status1.js";

export type BulkItemStatusUpdateRequest = {
  /**
   * | Attribute | Description | Data Type |
   * | --- | ----------- | ------- |
   * | ENROLL | To enroll items into the program | string |
   * | DISENROLL | To opt out items from the program | string |
   */
  status: Status1;
  /** Items */
  items: ItemsRequest[];
};

export const bulkItemStatusUpdateRequestSchema: Schema<BulkItemStatusUpdateRequest> =
  s.object<BulkItemStatusUpdateRequest>({
    status: status1Schema,
    items: s.array(s.lazy(() => itemsRequestSchema)),
  });
