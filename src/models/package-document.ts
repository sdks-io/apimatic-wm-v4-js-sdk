import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { format1Schema, type Format1 } from "./format1.js";
import { type1Schema, type Type1 } from "./type1.js";

export type PackageDocument = {
  type: Type1;
  format: Format1;
  /** Base64-encoded document bytes. */
  contents: string;
};

export const packageDocumentSchema: Schema<PackageDocument> = s.object<PackageDocument>({
  type: type1Schema,
  format: format1Schema,
  contents: s.string(),
});
