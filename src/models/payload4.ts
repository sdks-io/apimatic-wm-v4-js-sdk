import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { packageDocumentDetailSchema, type PackageDocumentDetail } from "./package-document-detail.js";

export type Payload4 = {
  shipmentId?: string;
  packageDocumentDetails?: PackageDocumentDetail[];
};

export const payload4Schema: Schema<Payload4> = s.object<Payload4>({
  shipmentId: s.optional(s.string()),
  packageDocumentDetails: s.optional(s.array(s.lazy(() => packageDocumentDetailSchema))),
});
