import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The `createInboundPlan` response. */
export type CreateInboundPlanResponse = {
  /** Identifier of the newly created inbound plan. */
  inboundPlanId: string;
  /** UUID for the given operation. */
  operationId: string;
};

export const createInboundPlanResponseSchema: Schema<CreateInboundPlanResponse> =
  s.object<CreateInboundPlanResponse>({
    inboundPlanId: s.string(),
    operationId: s.string(),
  });
