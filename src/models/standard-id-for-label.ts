import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StandardIdForLabel = {
  WalmartOrderId: "WalmartOrderId",
} as const;
export type StandardIdForLabel = (typeof StandardIdForLabel)[keyof typeof StandardIdForLabel] | (string & {});

export const standardIdForLabelSchema: EnumSchema<StandardIdForLabel> =
  s.enumOf<StandardIdForLabel>(StandardIdForLabel);
