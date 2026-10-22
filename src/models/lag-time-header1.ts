import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Defines the header metadata for a lag time update feed.
 *
 * <strong style="color: green;">Market availability: Global</strong>
 */
export type LagTimeHeader1 = {
  version?: string;
  feedDate?: string;
};

export const lagTimeHeader1Schema: Schema<LagTimeHeader1> = s.object<LagTimeHeader1>({
  version: s.optional(s.string()),
  feedDate: s.optional(s.string()),
});
