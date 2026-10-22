import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type1Schema, type Type1 } from "./type1.js";

/** Object describing a single uploaded document. */
export type DocumentType = {
  /** Original file name as uploaded. */
  fileName: string;
  /** Document category. */
  type: Type1;
};

export const documentTypeSchema: Schema<DocumentType> = s.object<DocumentType>({
  fileName: s.string(),
  type: type1Schema,
});
