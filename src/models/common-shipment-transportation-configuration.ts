import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  commonContactInformationSchema,
  type CommonContactInformation,
} from "./common-contact-information.js";
import {
  commonFreightInformationSchema,
  type CommonFreightInformation,
} from "./common-freight-information.js";
import { commonPalletInputSchema, type CommonPalletInput } from "./common-pallet-input.js";
import { commonWindowInputSchema, type CommonWindowInput } from "./common-window-input.js";

/** Details needed to generate the transportation options. */
export type CommonShipmentTransportationConfiguration = {
  /** The seller's contact information. */
  contactInformation?: CommonContactInformation;
  /** Freight information describes the SKUs that are in transit. */
  freightInformation?: CommonFreightInformation;
  /** List of pallet configuration inputs. */
  pallets?: CommonPalletInput[];
  /** Contains only a starting DateTime. */
  readyToShipWindow: CommonWindowInput;
  /** Identifier of a shipment. */
  shipmentId: string;
};

export const commonShipmentTransportationConfigurationSchema: Schema<CommonShipmentTransportationConfiguration> =
  s.object<CommonShipmentTransportationConfiguration>({
    contactInformation: s.optional(s.lazy(() => commonContactInformationSchema)),
    freightInformation: s.optional(s.lazy(() => commonFreightInformationSchema)),
    pallets: s.optional(s.array(s.lazy(() => commonPalletInputSchema))),
    readyToShipWindow: commonWindowInputSchema,
    shipmentId: s.string(),
  });
