import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  commonContactInformationSchema,
  type CommonContactInformation,
} from "./common-contact-information.js";

/** The transportation option selected to confirm. */
export type CommonTransportationSelection = {
  /** The seller's contact information. */
  contactInformation?: CommonContactInformation;
  /** Shipment ID that the transportation option is for. */
  shipmentId: string;
  /** Transportation option being selected for the provided shipment. */
  transportationOptionId: string;
};

export const commonTransportationSelectionSchema: Schema<CommonTransportationSelection> =
  s.object<CommonTransportationSelection>({
    contactInformation: s.optional(s.lazy(() => commonContactInformationSchema)),
    shipmentId: s.string(),
    transportationOptionId: s.string(),
  });
