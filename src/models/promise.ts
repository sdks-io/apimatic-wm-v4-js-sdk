import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deliveryWindowSchema, type DeliveryWindow } from "./delivery-window.js";
import { pickupWindowSchema, type PickupWindow } from "./pickup-window.js";

export type Promise = {
  deliveryWindow?: DeliveryWindow;
  pickupWindow?: PickupWindow;
};

export const promiseSchema: Schema<Promise> = s.object<Promise>({
  deliveryWindow: s.optional(s.lazy(() => deliveryWindowSchema)),
  pickupWindow: s.optional(s.lazy(() => pickupWindowSchema)),
});
