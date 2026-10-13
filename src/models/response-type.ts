import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ResponseType = {
  Code: "code",
} as const;
export type ResponseType = (typeof ResponseType)[keyof typeof ResponseType] | (string & {});

export const responseTypeSchema: EnumSchema<ResponseType> = s.enumOf<ResponseType>(ResponseType);
