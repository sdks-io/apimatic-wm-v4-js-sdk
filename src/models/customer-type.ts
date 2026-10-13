import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates whether to request Consumer or Business offers. Default is Consumer. */
export const CustomerType = {
  Consumer: "Consumer",
  Business: "Business",
} as const;
export type CustomerType = (typeof CustomerType)[keyof typeof CustomerType] | (string & {});

export const customerTypeSchema: EnumSchema<CustomerType> = s.enumOf<CustomerType>(CustomerType);
