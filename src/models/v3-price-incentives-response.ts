import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { item1Schema, type Item1 } from "./item1.js";
import { pageContextSchema, type PageContext } from "./page-context.js";

export type V3PriceIncentivesResponse = {
  /** <br><b style='color:green;'>Market availability: US</b> */
  pageContext?: PageContext;
  /** <br><b style='color:green;'>Market availability: US</b> */
  items?: Item1[];
};

export const v3PriceIncentivesResponseSchema: Schema<V3PriceIncentivesResponse> =
  s.object<V3PriceIncentivesResponse>({
    pageContext: s.optional(s.lazy(() => pageContextSchema)),
    items: s.optional(s.array(s.lazy(() => item1Schema))),
  });
