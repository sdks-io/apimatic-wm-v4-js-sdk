import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PickupWindow = {
  start?: Date;
  end?: Date;
};

export const pickupWindowSchema: Schema<PickupWindow> = s.object<PickupWindow>({
  start: s.optional(s.dateTime()),
  end: s.optional(s.dateTime()),
});
