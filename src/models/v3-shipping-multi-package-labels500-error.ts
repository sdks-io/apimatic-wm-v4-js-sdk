import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error71Schema, type Error71 } from "./error71.js";

export type V3ShippingMultiPackageLabels500Error = {
  errors?: Error71[];
};

export const v3ShippingMultiPackageLabels500ErrorSchema: Schema<V3ShippingMultiPackageLabels500Error> =
  s.object<V3ShippingMultiPackageLabels500Error>({
    errors: s.optional(s.array(s.lazy(() => error71Schema))),
  });
