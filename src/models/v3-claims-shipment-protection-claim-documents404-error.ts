import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { semError400Schema, type SemError400 } from "./sem-error400.js";

export type V3ClaimsShipmentProtectionClaimDocuments404Error = {
  errors?: SemError400[];
};

export const v3ClaimsShipmentProtectionClaimDocuments404ErrorSchema: Schema<V3ClaimsShipmentProtectionClaimDocuments404Error> =
  s.object<V3ClaimsShipmentProtectionClaimDocuments404Error>({
    errors: s.optional(s.array(s.lazy(() => semError400Schema))),
  });
