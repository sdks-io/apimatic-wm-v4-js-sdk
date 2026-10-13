import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { commonPackingOptionSchema, type CommonPackingOption } from "./common-packing-option.js";
import { commonPaginationSchema, type CommonPagination } from "./common-pagination.js";

/** The `listPackingOptions` response. */
export type ListPackingOptionsResponse = {
  /** List of packing options. */
  packingOptions: CommonPackingOption[];
  /** Contains tokens to fetch from a certain page. */
  pagination?: CommonPagination;
};

export const listPackingOptionsResponseSchema: Schema<ListPackingOptionsResponse> =
  s.object<ListPackingOptionsResponse>({
    packingOptions: s.array(s.lazy(() => commonPackingOptionSchema)),
    pagination: s.optional(s.lazy(() => commonPaginationSchema)),
  });
