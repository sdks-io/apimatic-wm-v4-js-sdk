import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { commonAddressInputSchema, type CommonAddressInput } from "./common-address-input.js";
import { commonItemInputSchema, type CommonItemInput } from "./common-item-input.js";

/** The `createInboundPlan` request. */
export type CreateInboundPlanRequest = {
  /**
   * Walmart Marketplace IDs where the items need to be shipped to. Currently only one marketplace
   * can be selected.
   */
  destinationMarketplaces: string[];
  /** Items included in this plan. */
  items: CommonItemInput[];
  /** Name for the Inbound Plan. If one isn't provided, a default name will be provided. */
  name?: string;
  /** Specific details to identify a place (input variant — phone required). */
  sourceAddress: CommonAddressInput;
};

export const createInboundPlanRequestSchema: Schema<CreateInboundPlanRequest> =
  s.object<CreateInboundPlanRequest>({
    destinationMarketplaces: s.array(s.string()),
    items: s.array(s.lazy(() => commonItemInputSchema)),
    name: s.optional(s.string()),
    sourceAddress: commonAddressInputSchema,
  });
