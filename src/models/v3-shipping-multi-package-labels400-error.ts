import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorIdentifiers1Schema, type ErrorIdentifiers1 } from "./error-identifiers1.js";

export type V3ShippingMultiPackageLabels400Error = {
  /**
   * error code.
   *
   * <b style="color: green;">Market availability: MX | CL | US</b>
   */
  code?: string;
  /**
   * field.
   *
   * <b style="color: green;">Market availability: MX | CL | US</b>
   */
  field?: string;
  /**
   * error description.
   *
   * <b style="color: green;">Market availability: MX | CL | US</b>
   */
  description?: string;
  /**
   * error info.
   *
   * <b style="color: green;">Market availability: MX | CL | US</b>
   */
  info?: string;
  /**
   * error severity.
   *
   * <b style="color: green;">Market availability: MX | CL | US</b>
   */
  severity?: string;
  /**
   * error category.
   *
   * <b style="color: green;">Market availability: MX | CL | US</b>
   */
  category?: string;
  /**
   * error Identifiers.
   *
   * <b style="color: green;">Market availability: MX | CL | US</b>
   */
  errorIdentifiers?: ErrorIdentifiers1;
};

export const v3ShippingMultiPackageLabels400ErrorSchema: Schema<V3ShippingMultiPackageLabels400Error> =
  s.object<V3ShippingMultiPackageLabels400Error>({
    code: s.optional(s.string()),
    field: s.optional(s.string()),
    description: s.optional(s.string()),
    info: s.optional(s.string()),
    severity: s.optional(s.string()),
    category: s.optional(s.string()),
    errorIdentifiers: s.optional(s.lazy(() => errorIdentifiers1Schema)),
  });
