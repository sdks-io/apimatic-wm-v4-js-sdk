import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { carrierSchema, type Carrier } from "./carrier.js";
import { moneySchema, type Money } from "./money.js";
import { promiseSchema, type Promise } from "./promise.js";
import { serviceSchema, type Service } from "./service.js";
import { weightSchema, type Weight } from "./weight.js";

export type Rate = {
  rateId: string;
  carrier: Carrier;
  service: Service;
  totalCharge: Money;
  billedWeight?: Weight;
  expirationTime?: Date;
  promise?: Promise;
  /**
   * List of label/document formats supported by this rate. Each entry shape matches
   * industry-standard SupportedDocumentSpecification; tier-1 fidelity is sufficient for v4 — see
   * TODO at top of file.
   */
  supportedDocumentSpecifications?: Record<string, unknown>[];
  /**
   * Value-added services available for purchase at this rate (signature, COD, dangerous goods,
   * etc). Compressed shape; full fidelity tracked in a follow-up PR.
   */
  availableValueAddedServices?: Record<string, unknown>[];
};

export const rateSchema: Schema<Rate> = s.object<Rate>({
  rateId: s.string(),
  carrier: carrierSchema,
  service: serviceSchema,
  totalCharge: moneySchema,
  billedWeight: s.optional(s.lazy(() => weightSchema)),
  expirationTime: s.optional(s.dateTime()),
  promise: s.optional(s.lazy(() => promiseSchema)),
  supportedDocumentSpecifications: s.optional(s.array(s.record(s.string(), s.unknown()))),
  availableValueAddedServices: s.optional(s.array(s.record(s.string(), s.unknown()))),
});
