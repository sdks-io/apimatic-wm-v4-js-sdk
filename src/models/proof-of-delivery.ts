import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ProofOfDelivery = {
  deliveredTime?: Date;
  recipientName?: string;
  /** Base64-encoded signature image bytes. */
  signatureImage?: string;
};

export const proofOfDeliverySchema: Schema<ProofOfDelivery> = s.object<ProofOfDelivery>({
  deliveredTime: s.optional(s.dateTime()),
  recipientName: s.optional(s.string()),
  signatureImage: s.optional(s.string()),
});
