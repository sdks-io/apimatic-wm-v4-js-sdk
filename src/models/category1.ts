import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Category classifying the origin of the error. */
export const Category1 = {
  Application: "APPLICATION",
  Service: "SERVICE",
  Request: "REQUEST",
  Data: "DATA",
} as const;
export type Category1 = (typeof Category1)[keyof typeof Category1] | (string & {});

export const category1Schema: EnumSchema<Category1> = s.enumOf<Category1>(Category1);
