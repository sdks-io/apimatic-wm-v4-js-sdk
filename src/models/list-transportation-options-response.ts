import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { commonPaginationSchema, type CommonPagination } from "./common-pagination.js";
import {
  commonTransportationOptionSchema,
  type CommonTransportationOption,
} from "./common-transportation-option.js";

/** The `listTransportationOptions` response. */
export type ListTransportationOptionsResponse = {
  /** Transportation options generated for the placement option. */
  transportationOptions: CommonTransportationOption[];
  /** Contains tokens to fetch from a certain page. */
  pagination?: CommonPagination;
};

export const listTransportationOptionsResponseSchema: Schema<ListTransportationOptionsResponse> =
  s.object<ListTransportationOptionsResponse>({
    transportationOptions: s.array(s.lazy(() => commonTransportationOptionSchema)),
    pagination: s.optional(s.lazy(() => commonPaginationSchema)),
  });
