import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error61Schema, type Error61 } from "./error61.js";

export type V3ShippingLabels500Error1 = {
  /** List of error details describing why the request failed. */
  errors?: Error61[];
};

export const v3ShippingLabels500Error1Schema: Schema<V3ShippingLabels500Error1> =
  s.object<V3ShippingLabels500Error1>({
    errors: s.optional(s.array(s.lazy(() => error61Schema))),
  });
