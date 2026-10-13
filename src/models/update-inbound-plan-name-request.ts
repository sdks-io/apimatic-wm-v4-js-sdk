import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The `updateInboundPlanName` request. */
export type UpdateInboundPlanNameRequest = {
  /** A human-readable name to update the inbound plan name to. */
  name: string;
};

export const updateInboundPlanNameRequestSchema: Schema<UpdateInboundPlanNameRequest> =
  s.object<UpdateInboundPlanNameRequest>({
    name: s.string(),
  });
