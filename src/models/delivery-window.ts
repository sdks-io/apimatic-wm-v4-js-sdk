import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeliveryWindow = {
  start?: Date;
  end?: Date;
};

export const deliveryWindowSchema: Schema<DeliveryWindow> = s.object<DeliveryWindow>({
  start: s.optional(s.dateTime()),
  end: s.optional(s.dateTime()),
});
