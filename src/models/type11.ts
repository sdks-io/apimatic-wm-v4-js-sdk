import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type11 = {
  Pickup: "PICKUP",
  Dropoff: "DROPOFF",
} as const;
export type Type11 = (typeof Type11)[keyof typeof Type11] | (string & {});

export const type11Schema: EnumSchema<Type11> = s.enumOf<Type11>(Type11);
