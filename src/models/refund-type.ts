import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Why the refund is being issued. Compressed from gmp-orders-mono's 22-entry `RefundReason` enum to
 * the three classes that actually drive downstream behaviour today (return-flow vs cancel-flow vs
 * goodwill-credit). Free-form sub-reason goes in `reason`.
 */
export const RefundType = {
  Return: "RETURN",
  Cancellation: "CANCELLATION",
  Goodwill: "GOODWILL",
} as const;
export type RefundType = (typeof RefundType)[keyof typeof RefundType] | (string & {});

export const refundTypeSchema: EnumSchema<RefundType> = s.enumOf<RefundType>(RefundType);
