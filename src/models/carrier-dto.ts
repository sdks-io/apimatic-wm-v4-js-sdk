import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Defines the carrier configurations used for shipping, like carrier name and carrier service. */
export type CarrierDto = {
  /** Name of the carrier to use for shipping. */
  carrierName?: string;
  /** Service name of the carrier to use for shipping */
  carrierService?: string;
};

export const carrierDtoSchema: Schema<CarrierDto> = s.object<CarrierDto>({
  carrierName: s.optional(s.string()),
  carrierService: s.optional(s.string()),
});
