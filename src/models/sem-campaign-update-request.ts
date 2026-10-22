import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  semCampaignItemsOperationSchema,
  type SemCampaignItemsOperation,
} from "./sem-campaign-items-operation.js";
import {
  semCampaignUpdateMetadataSchema,
  type SemCampaignUpdateMetadata,
} from "./sem-campaign-update-metadata.js";

export type SemCampaignUpdateRequest = {
  /** Metadata for updating the campaign. */
  metadata?: SemCampaignUpdateMetadata;
  /** List of operations to perform on campaign items. */
  itemsOperations?: SemCampaignItemsOperation[];
};

export const semCampaignUpdateRequestSchema: Schema<SemCampaignUpdateRequest> =
  s.object<SemCampaignUpdateRequest>({
    metadata: s.optional(s.lazy(() => semCampaignUpdateMetadataSchema)),
    itemsOperations: s.optional(s.array(s.lazy(() => semCampaignItemsOperationSchema))),
  });
