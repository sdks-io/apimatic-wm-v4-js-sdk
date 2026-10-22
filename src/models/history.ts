import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { documentSchema, type Document } from "./document.js";

export type History = {
  author?: string;
  timestamp?: Date;
  status?: string;
  notes?: string;
  documents?: Document[];
};

export const historySchema: Schema<History> = s.object<History>({
  author: s.optional(s.string()),
  timestamp: s.optional(s.dateTime()),
  status: s.optional(s.string()),
  notes: s.optional(s.string()),
  documents: s.optional(s.array(s.lazy(() => documentSchema))),
});
