import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { operationTypeSchema, type OperationType } from "./operation-type.js";

/** List of operations to perform on campaign items. */
export type SemCampaignItemsOperation = {
  /** Type of operation to perform on campaign items. Allowed values: `ADD` or `REMOVE`. */
  operationType: OperationType;
  /** List of SKUs associated with the campaign. Must contain between 1 and 10,000 SKUs. */
  skus: string[];
};

export const semCampaignItemsOperationSchema: Schema<SemCampaignItemsOperation> =
  s.object<SemCampaignItemsOperation>({
    operationType: operationTypeSchema,
    skus: s.array(s.string()),
  });
