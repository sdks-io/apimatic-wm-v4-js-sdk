import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { semError400Schema, type SemError400 } from "./sem-error400.js";

export type V3ClaimsShipmentProtection400Error1 = {
  errors?: SemError400[];
};

export const v3ClaimsShipmentProtection400Error1Schema: Schema<V3ClaimsShipmentProtection400Error1> =
  s.object<V3ClaimsShipmentProtection400Error1>({
    errors: s.optional(s.array(s.lazy(() => semError400Schema))),
  });
