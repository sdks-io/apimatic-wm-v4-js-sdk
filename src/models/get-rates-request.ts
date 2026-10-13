import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { address1Schema, type Address1 } from "./address1.js";
import { channelDetailsSchema, type ChannelDetails } from "./channel-details.js";
import { packageSchema, type Package } from "./package.js";
import {
  requestedValueAddedServiceSchema,
  type RequestedValueAddedService,
} from "./requested-value-added-service.js";
import { serviceSelectionSchema, type ServiceSelection } from "./service-selection.js";

export type GetRatesRequest = {
  shipTo: Address1;
  shipFrom: Address1;
  returnTo?: Address1;
  /** When the shipment will be tendered to the carrier. */
  shipDate?: Date;
  packages: Package[];
  channelDetails: ChannelDetails;
  /**
   * Optional seller-supplied filter to restrict the rate quote to a specific carrier(s) and/or
   * service(s).
   */
  serviceSelection?: ServiceSelection;
  valueAddedServices?: RequestedValueAddedService[];
};

export const getRatesRequestSchema: Schema<GetRatesRequest> = s.object<GetRatesRequest>({
  shipTo: address1Schema,
  shipFrom: address1Schema,
  returnTo: s.optional(s.lazy(() => address1Schema)),
  shipDate: s.optional(s.dateTime()),
  packages: s.array(s.lazy(() => packageSchema)),
  channelDetails: channelDetailsSchema,
  serviceSelection: s.optional(s.lazy(() => serviceSelectionSchema)),
  valueAddedServices: s.optional(s.array(s.lazy(() => requestedValueAddedServiceSchema))),
});
