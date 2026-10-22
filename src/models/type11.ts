import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Document category; one of PROOF_OF_DAMAGED_ITEM, INVOICE, OTHER, PPOD. */
export const Type11 = {
  ProofOfDamagedItem: "PROOF_OF_DAMAGED_ITEM",
  Invoice: "INVOICE",
  Other: "OTHER",
  Ppod: "PPOD",
} as const;
export type Type11 = (typeof Type11)[keyof typeof Type11] | (string & {});

export const type11Schema: EnumSchema<Type11> = s.enumOf<Type11>(Type11);
