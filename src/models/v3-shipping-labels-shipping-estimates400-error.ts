import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorIdentifiers11Schema, type ErrorIdentifiers11 } from "./error-identifiers11.js";

export type V3ShippingLabelsShippingEstimates400Error = {
  /**
   * error code.
   *
   * <b style="color: green;">Market availability: US | CA | MX</b>
   */
  code?: string;
  /**
   * field.
   *
   * <b style="color: green;">Market availability: US | CA | MX</b>
   */
  field?: string;
  /**
   * error description.
   *
   * <b style="color: green;">Market availability: US | CA | MX</b>
   */
  description?: string;
  /**
   * error info.
   *
   * <b style="color: green;">Market availability: US | CA | MX</b>
   */
  info?: string;
  /**
   * error severity.
   *
   * <b style="color: green;">Market availability: US | CA | MX</b>
   */
  severity?: string;
  /**
   * error category.
   *
   * <b style="color: green;">Market availability: US | CA | MX</b>
   */
  category?: string;
  /**
   * error Identifiers.
   *
   * <b style="color: green;">Market availability: US | CA | MX</b>
   */
  errorIdentifiers?: ErrorIdentifiers11;
};

export const v3ShippingLabelsShippingEstimates400ErrorSchema: Schema<V3ShippingLabelsShippingEstimates400Error> =
  s.object<V3ShippingLabelsShippingEstimates400Error>({
    code: s.optional(s.string()),
    field: s.optional(s.string()),
    description: s.optional(s.string()),
    info: s.optional(s.string()),
    severity: s.optional(s.string()),
    category: s.optional(s.string()),
    errorIdentifiers: s.optional(s.lazy(() => errorIdentifiers11Schema)),
  });
