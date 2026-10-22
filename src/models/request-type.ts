import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RequestType = {
  WalmartPlusSff: "WALMART_PLUS_SFF",
} as const;
export type RequestType = (typeof RequestType)[keyof typeof RequestType] | (string & {});

export const requestTypeSchema: EnumSchema<RequestType> = s.enumOf<RequestType>(RequestType);
