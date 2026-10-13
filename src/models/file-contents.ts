import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fileTypeSchema, type FileType } from "./file-type.js";

export type FileContents = {
  /** Base64-encoded label file */
  contents?: string;
  fileType?: FileType;
  checksum?: string;
};

export const fileContentsSchema: Schema<FileContents> = s.object<FileContents>({
  contents: s.optional(s.string()),
  fileType: s.optional(s.lazy(() => fileTypeSchema)),
  checksum: s.optional(s.string()),
});
