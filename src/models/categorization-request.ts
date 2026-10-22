import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  categorizationRequestFilterSchema,
  type CategorizationRequestFilter,
} from "./categorization-request-filter.js";
import { categorizationTypeSchema, type CategorizationType } from "./categorization-type.js";
import { metaDataRequestSchema, type MetaDataRequest } from "./meta-data-request.js";

export type CategorizationRequest = {
  /**
   * | Attribute | Description | Data Type |
   * | --- | ----------- | ------- |
   * | BRAND | To get list of brands which are associated with the assortment recommendations | string |
   * | CATEGORY | To get list of categories which are associated with the assortment recommendations | string |
   */
  categorizationType: CategorizationType;
  /** Meta information for the request. */
  meta?: MetaDataRequest;
  /** Different type of filters can be passed in this object. */
  filterCriteria?: CategorizationRequestFilter;
};

export const categorizationRequestSchema: Schema<CategorizationRequest> = s.object<CategorizationRequest>({
  categorizationType: categorizationTypeSchema,
  meta: s.optional(s.lazy(() => metaDataRequestSchema)),
  filterCriteria: s.optional(s.lazy(() => categorizationRequestFilterSchema)),
});
