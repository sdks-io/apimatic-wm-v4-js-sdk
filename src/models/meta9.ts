import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Meta information related to the trends response. */
export type Meta9 = {
  /**
   * Currency associated with the price trends of the recommendation.
   *
   * Value: USD
   */
  currency?: string;
};

export const meta9Schema: Schema<Meta9> = s.object<Meta9>({
  currency: s.optional(s.string()),
});
