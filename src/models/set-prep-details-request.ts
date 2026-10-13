import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  commonMskuPrepDetailInputSchema,
  type CommonMskuPrepDetailInput,
} from "./common-msku-prep-detail-input.js";

/** The `setPrepDetails` request. */
export type SetPrepDetailsRequest = {
  /**
   * The Walmart Marketplace ID. For a list of possible values, refer to [Marketplace
   * IDs](https://developer-docs.walmart.com/seller-api/docs/marketplace-ids).
   */
  marketplaceId: string;
  /** A list of MSKUs and related prep details. */
  mskuPrepDetails: CommonMskuPrepDetailInput[];
};

export const setPrepDetailsRequestSchema: Schema<SetPrepDetailsRequest> = s.object<SetPrepDetailsRequest>({
  marketplaceId: s.string(),
  mskuPrepDetails: s.array(s.lazy(() => commonMskuPrepDetailInputSchema)),
});
