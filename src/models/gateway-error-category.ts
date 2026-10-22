import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const GatewayErrorCategory = {
  InternalDataError: "INTERNAL_DATA_ERROR",
  ExternalDataError: "EXTERNAL_DATA_ERROR",
  SystemError: "SYSTEM_ERROR",
} as const;
export type GatewayErrorCategory =
  | (typeof GatewayErrorCategory)[keyof typeof GatewayErrorCategory]
  | (string & {});

export const gatewayErrorCategorySchema: EnumSchema<GatewayErrorCategory> =
  s.enumOf<GatewayErrorCategory>(GatewayErrorCategory);
