import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorIdentifiers2Schema, type ErrorIdentifiers2 } from "./error-identifiers2.js";

export type V3ShippingLabelsCarriersTrackings400Error = {
  /**
   * error code.
   *
   * <b style="color: green;">Market availability: CL only</b>
   */
  code?: string;
  /**
   * field.
   *
   * <b style="color: green;">Market availability: CL only</b>
   */
  field?: string;
  /**
   * error description.
   *
   * <b style="color: green;">Market availability: CL only</b>
   */
  description?: string;
  /**
   * error info.
   *
   * <b style="color: green;">Market availability: CL only</b>
   */
  info?: string;
  /**
   * error severity.
   *
   * <b style="color: green;">Market availability: CL only</b>
   */
  severity?: string;
  /**
   * error category.
   *
   * <b style="color: green;">Market availability: CL only</b>
   */
  category?: string;
  /**
   * error Identifiers.
   *
   * <b style="color: green;">Market availability: CL only</b>
   */
  errorIdentifiers?: ErrorIdentifiers2;
};

export const v3ShippingLabelsCarriersTrackings400ErrorSchema: Schema<V3ShippingLabelsCarriersTrackings400Error> =
  s.object<V3ShippingLabelsCarriersTrackings400Error>({
    code: s.optional(s.string()),
    field: s.optional(s.string()),
    description: s.optional(s.string()),
    info: s.optional(s.string()),
    severity: s.optional(s.string()),
    category: s.optional(s.string()),
    errorIdentifiers: s.optional(s.lazy(() => errorIdentifiers2Schema)),
  });
