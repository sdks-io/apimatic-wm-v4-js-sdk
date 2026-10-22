import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { documentType2Schema, type DocumentType2 } from "./document-type2.js";

export type Document = {
  id?: string;
  fileName?: string;
  fileType?: string;
  documentType?: DocumentType2;
};

export const documentSchema: Schema<Document> = s.object<Document>({
  id: s.optional(s.string()),
  fileName: s.optional(s.string()),
  fileType: s.optional(s.string()),
  documentType: s.optional(s.lazy(() => documentType2Schema)),
});
