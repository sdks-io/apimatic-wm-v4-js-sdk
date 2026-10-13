import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  commonShipmentTransportationConfigurationSchema,
  type CommonShipmentTransportationConfiguration,
} from "./common-shipment-transportation-configuration.js";

/** The `generateTransportationOptions` request. */
export type GenerateTransportationOptionsRequest = {
  /** The placement option to generate transportation options for. */
  placementOptionId: string;
  /** List of shipment transportation configurations. */
  shipmentTransportationConfigurations: CommonShipmentTransportationConfiguration[];
};

export const generateTransportationOptionsRequestSchema: Schema<GenerateTransportationOptionsRequest> =
  s.object<GenerateTransportationOptionsRequest>({
    placementOptionId: s.string(),
    shipmentTransportationConfigurations: s.array(
      s.lazy(() => commonShipmentTransportationConfigurationSchema),
    ),
  });
