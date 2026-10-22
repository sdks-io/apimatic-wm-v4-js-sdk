import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  semCampaignCreateMetadataSchema,
  type SemCampaignCreateMetadata,
} from "./sem-campaign-create-metadata.js";
import {
  semCampaignItemsOperationSchema,
  type SemCampaignItemsOperation,
} from "./sem-campaign-items-operation.js";

export type SemCampaignCreateRequest = {
  /** Metadata for creating a campaign. */
  metadata: SemCampaignCreateMetadata;
  /** List of operations to perform on campaign items. */
  itemsOperations: SemCampaignItemsOperation[];
};

export const semCampaignCreateRequestSchema: Schema<SemCampaignCreateRequest> =
  s.object<SemCampaignCreateRequest>({
    metadata: semCampaignCreateMetadataSchema,
    itemsOperations: s.array(s.lazy(() => semCampaignItemsOperationSchema)),
  });
