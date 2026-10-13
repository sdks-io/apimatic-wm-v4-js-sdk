import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { commonMskuPrepDetailSchema, type CommonMskuPrepDetail } from "./common-msku-prep-detail.js";

/** The `listPrepDetails` response. */
export type ListPrepDetailsResponse = {
  /** A list of MSKUs and related prep details. */
  mskuPrepDetails: CommonMskuPrepDetail[];
};

export const listPrepDetailsResponseSchema: Schema<ListPrepDetailsResponse> =
  s.object<ListPrepDetailsResponse>({
    mskuPrepDetails: s.array(s.lazy(() => commonMskuPrepDetailSchema)),
  });
