import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { estimateSchema, type Estimate } from "./estimate.js";

/** Response payload containing the list of shipping cost estimates for available services. */
export type Data6 = {
  /** List of estimates. */
  estimates?: Estimate[];
  /**
   * Alert message displayed when there are issues fetching estimates for the carrier service type.
   */
  alertMessage?: string;
};

export const data6Schema: Schema<Data6> = s.object<Data6>({
  estimates: s.optional(s.array(s.lazy(() => estimateSchema))),
  alertMessage: s.optional(s.string()),
});
