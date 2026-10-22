import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type11Schema, type Type11 } from "./type11.js";

/** Object describing a single uploaded document. */
export type DocumentType1 = {
  /** Original file name for the uploaded document. */
  fileName: string;
  /** Document category; one of PROOF_OF_DAMAGED_ITEM, INVOICE, OTHER, PPOD. */
  type: Type11;
};

export const documentType1Schema: Schema<DocumentType1> = s.object<DocumentType1>({
  fileName: s.string(),
  type: type11Schema,
});
