import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { packageDocumentSchema, type PackageDocument } from "./package-document.js";

export type PackageDocumentDetail = {
  packageClientReferenceId: string;
  packageDocuments: PackageDocument[];
  trackingId?: string;
};

export const packageDocumentDetailSchema: Schema<PackageDocumentDetail> = s.object<PackageDocumentDetail>({
  packageClientReferenceId: s.string(),
  packageDocuments: s.array(s.lazy(() => packageDocumentSchema)),
  trackingId: s.optional(s.string()),
});
