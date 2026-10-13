import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  marketplaceParticipationSchema,
  type MarketplaceParticipation,
} from "./marketplace-participation.js";

export type GetMarketplaceParticipationsResponse = {
  payload?: MarketplaceParticipation[];
};

export const getMarketplaceParticipationsResponseSchema: Schema<GetMarketplaceParticipationsResponse> =
  s.object<GetMarketplaceParticipationsResponse>({
    payload: s.optional(s.array(s.lazy(() => marketplaceParticipationSchema))),
  });
