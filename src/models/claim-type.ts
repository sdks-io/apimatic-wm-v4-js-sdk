import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Claim category: LIT (lost in transit), LAD (lost after delivery), or DAMAGED. */
export const ClaimType = {
  Lit: "LIT",
  Lad: "LAD",
  Damaged: "DAMAGED",
} as const;
export type ClaimType = (typeof ClaimType)[keyof typeof ClaimType] | (string & {});

export const claimTypeSchema: EnumSchema<ClaimType> = s.enumOf<ClaimType>(ClaimType);
