import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ResponseType1 = {
  Code: "code",
} as const;
export type ResponseType1 = (typeof ResponseType1)[keyof typeof ResponseType1] | (string & {});

export const responseType1Schema: EnumSchema<ResponseType1> = s.enumOf<ResponseType1>(ResponseType1);
