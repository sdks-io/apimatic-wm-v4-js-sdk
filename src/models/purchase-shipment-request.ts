import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  requestedDocumentSpecificationSchema,
  type RequestedDocumentSpecification,
} from "./requested-document-specification.js";
import {
  requestedValueAddedServiceSchema,
  type RequestedValueAddedService,
} from "./requested-value-added-service.js";

export type PurchaseShipmentRequest = {
  /** requestToken returned by the prior getRates response. */
  requestToken: string;
  /** The chosen rateId from the getRates response. */
  rateId: string;
  requestedDocumentSpecification: RequestedDocumentSpecification;
  requestedValueAddedServices?: RequestedValueAddedService[];
  /**
   * Carrier/service-specific inputs validated against the schema returned by getAdditionalInputs.
   */
  additionalInputs?: Record<string, unknown>;
};

export const purchaseShipmentRequestSchema: Schema<PurchaseShipmentRequest> =
  s.object<PurchaseShipmentRequest>({
    requestToken: s.string(),
    rateId: s.string(),
    requestedDocumentSpecification: requestedDocumentSpecificationSchema,
    requestedValueAddedServices: s.optional(s.array(s.lazy(() => requestedValueAddedServiceSchema))),
    additionalInputs: s.optional(s.record(s.string(), s.unknown())),
  });
