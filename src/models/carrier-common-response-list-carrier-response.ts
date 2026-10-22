import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { carrierSchema, type Carrier } from "./carrier.js";
import { error31Schema, type Error31 } from "./error31.js";

export type CarrierCommonResponseListCarrierResponse = {
  /** carriers */
  carriers?: Carrier[];
  /** List of error details describing why the request failed. */
  errors?: Error31[];
};

export const carrierCommonResponseListCarrierResponseSchema: Schema<CarrierCommonResponseListCarrierResponse> =
  s.object<CarrierCommonResponseListCarrierResponse>({
    carriers: s.optional(s.array(s.lazy(() => carrierSchema))),
    errors: s.optional(s.array(s.lazy(() => error31Schema))),
  });
