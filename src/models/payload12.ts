import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { packageDocumentDetailSchema, type PackageDocumentDetail } from "./package-document-detail.js";
import { promiseSchema, type Promise } from "./promise.js";

export type Payload12 = {
  shipmentId?: string;
  packageDocumentDetails?: PackageDocumentDetail[];
  promise?: Promise;
};

export const payload12Schema: Schema<Payload12> = s.object<Payload12>({
  shipmentId: s.optional(s.string()),
  packageDocumentDetails: s.optional(s.array(s.lazy(() => packageDocumentDetailSchema))),
  promise: s.optional(s.lazy(() => promiseSchema)),
});
