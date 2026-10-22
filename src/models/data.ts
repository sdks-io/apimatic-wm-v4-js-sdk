import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { currentClaimStatusSchema, type CurrentClaimStatus } from "./current-claim-status.js";
import { historySchema, type History } from "./history.js";

export type Data = {
  currentClaimStatus?: CurrentClaimStatus;
  history?: History[];
};

export const dataSchema: Schema<Data> = s.object<Data>({
  currentClaimStatus: s.optional(s.lazy(() => currentClaimStatusSchema)),
  history: s.optional(s.array(s.lazy(() => historySchema))),
});
