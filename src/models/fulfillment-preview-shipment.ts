import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FulfillmentPreviewShipment = {
  earliestShipDate?: Date;
  latestShipDate?: Date;
  earliestArrivalDate?: Date;
  latestArrivalDate?: Date;
  shippingNotes?: string[];
};

export const fulfillmentPreviewShipmentSchema: Schema<FulfillmentPreviewShipment> =
  s.object<FulfillmentPreviewShipment>({
    earliestShipDate: s.optional(s.dateTime()),
    latestShipDate: s.optional(s.dateTime()),
    earliestArrivalDate: s.optional(s.dateTime()),
    latestArrivalDate: s.optional(s.dateTime()),
    shippingNotes: s.optional(s.array(s.string())),
  });
