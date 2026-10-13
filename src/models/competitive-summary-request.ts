import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { includedDatum2Schema, type IncludedDatum2 } from "./included-datum2.js";

/** An individual competitive summary request. */
export type CompetitiveSummaryRequest = {
  /** The Walmart Item ID of the item . */
  walmartItemId: string;
  /** A marketplace identifier. */
  marketplaceId: string;
  /** The list of requested competitive pricing data for the product. */
  includedData: IncludedDatum2[];
};

export const competitiveSummaryRequestSchema: Schema<CompetitiveSummaryRequest> =
  s.object<CompetitiveSummaryRequest>({
    walmartItemId: s.string(),
    marketplaceId: s.string(),
    includedData: s.array(s.lazy(() => includedDatum2Schema)),
  });
