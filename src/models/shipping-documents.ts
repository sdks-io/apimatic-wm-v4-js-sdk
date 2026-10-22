import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Shipping Documents */
export type ShippingDocuments = {
  documentFormat?: string;
  documentType?: string;
  base64EncodedDocument?: string;
};

export const shippingDocumentsSchema: Schema<ShippingDocuments> = s.object<ShippingDocuments>({
  documentFormat: s.optional(s.string()),
  documentType: s.optional(s.string()),
  base64EncodedDocument: s.optional(s.string()),
});
