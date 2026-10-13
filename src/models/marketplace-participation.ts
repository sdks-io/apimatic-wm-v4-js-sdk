import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { marketplaceSchema, type Marketplace } from "./marketplace.js";
import { participationSchema, type Participation } from "./participation.js";

export type MarketplaceParticipation = {
  marketplace?: Marketplace;
  participation?: Participation;
};

export const marketplaceParticipationSchema: Schema<MarketplaceParticipation> =
  s.object<MarketplaceParticipation>({
    marketplace: s.optional(s.lazy(() => marketplaceSchema)),
    participation: s.optional(s.lazy(() => participationSchema)),
  });
