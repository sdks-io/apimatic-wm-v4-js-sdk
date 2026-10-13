import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { address1Schema, type Address1 } from "./address1.js";
import { channelDetailsSchema, type ChannelDetails } from "./channel-details.js";
import { packageSchema, type Package } from "./package.js";
import {
  requestedDocumentSpecificationSchema,
  type RequestedDocumentSpecification,
} from "./requested-document-specification.js";
import {
  requestedValueAddedServiceSchema,
  type RequestedValueAddedService,
} from "./requested-value-added-service.js";
import { serviceSelectionSchema, type ServiceSelection } from "./service-selection.js";

export type OneClickShipmentRequest = {
  shipTo: Address1;
  shipFrom: Address1;
  returnTo?: Address1;
  shipDate?: Date;
  packages: Package[];
  /**
   * Optional seller-supplied filter to restrict the rate quote to a specific carrier(s) and/or
   * service(s).
   */
  serviceSelection: ServiceSelection;
  valueAddedServices?: RequestedValueAddedService[];
  requestedDocumentSpecification: RequestedDocumentSpecification;
  channelDetails: ChannelDetails;
};

export const oneClickShipmentRequestSchema: Schema<OneClickShipmentRequest> =
  s.object<OneClickShipmentRequest>({
    shipTo: address1Schema,
    shipFrom: address1Schema,
    returnTo: s.optional(s.lazy(() => address1Schema)),
    shipDate: s.optional(s.dateTime()),
    packages: s.array(s.lazy(() => packageSchema)),
    serviceSelection: serviceSelectionSchema,
    valueAddedServices: s.optional(s.array(s.lazy(() => requestedValueAddedServiceSchema))),
    requestedDocumentSpecification: requestedDocumentSpecificationSchema,
    channelDetails: channelDetailsSchema,
  });
