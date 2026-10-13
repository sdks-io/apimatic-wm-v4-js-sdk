import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { address2Schema, type Address2 } from "./address2.js";

export type Payload21 = {
  purchaseOrderId?: string;
  shippingAddress?: Address2;
};

export const payload21Schema: Schema<Payload21> = s.object<Payload21>({
  purchaseOrderId: s.optional(s.string()),
  shippingAddress: s.optional(s.lazy(() => address2Schema)),
});
