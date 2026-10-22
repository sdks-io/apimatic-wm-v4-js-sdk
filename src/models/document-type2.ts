import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DocumentType2 = {
  ProofOfDamagedItem: "PROOF_OF_DAMAGED_ITEM",
  Invoice: "INVOICE",
  Other: "OTHER",
  Ppod: "PPOD",
} as const;
export type DocumentType2 = (typeof DocumentType2)[keyof typeof DocumentType2] | (string & {});

export const documentType2Schema: EnumSchema<DocumentType2> = s.enumOf<DocumentType2>(DocumentType2);
