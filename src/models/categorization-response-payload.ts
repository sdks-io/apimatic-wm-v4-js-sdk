import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { categorizationFacetSchema, type CategorizationFacet } from "./categorization-facet.js";
import { categorizationTypeSchema, type CategorizationType } from "./categorization-type.js";
import { metaDataResponseSchema, type MetaDataResponse } from "./meta-data-response.js";

/** Payload in the response having the categorization details about the item recommendations. */
export type CategorizationResponsePayload = {
  /**
   * | Attribute | Description | Data Type |
   * | --- | ----------- | ------- |
   * | BRAND | To get list of brands which are associated with the assortment recommendations | string |
   * | CATEGORY | To get list of categories which are associated with the assortment recommendations | string |
   */
  categorizationType?: CategorizationType;
  /** Meta information for the response. */
  meta?: MetaDataResponse;
  /** Information of item recommendations based on the categorizationType. */
  records?: CategorizationFacet[];
};

export const categorizationResponsePayloadSchema: Schema<CategorizationResponsePayload> =
  s.object<CategorizationResponsePayload>({
    categorizationType: s.optional(s.lazy(() => categorizationTypeSchema)),
    meta: s.optional(s.lazy(() => metaDataResponseSchema)),
    records: s.optional(s.array(s.lazy(() => categorizationFacetSchema))),
  });
