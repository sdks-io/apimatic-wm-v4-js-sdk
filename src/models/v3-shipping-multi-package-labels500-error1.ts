import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error71Schema, type Error71 } from "./error71.js";

export type V3ShippingMultiPackageLabels500Error1 = {
  errors?: Error71[];
};

export const v3ShippingMultiPackageLabels500Error1Schema: Schema<V3ShippingMultiPackageLabels500Error1> =
  s.object<V3ShippingMultiPackageLabels500Error1>({
    errors: s.optional(s.array(s.lazy(() => error71Schema))),
  });
