import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Recommendation category.
 *
 * - **BUDGET**: Recommended budget adjustment (daily or total)
 * - **BIDDING_STRATEGY**: Recommended change to bidding strategy
 */
export const Type = {
  Budget: "BUDGET",
  BiddingStrategy: "BIDDING_STRATEGY",
} as const;
export type Type = (typeof Type)[keyof typeof Type] | (string & {});

export const typeSchema: EnumSchema<Type> = s.enumOf<Type>(Type);
