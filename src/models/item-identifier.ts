import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { identifierTypeSchema, type IdentifierType } from "./identifier-type.js";

export type ItemIdentifier = {
  identifierType?: IdentifierType;
  identifier?: string;
  marketplaceId?: string;
};

export const itemIdentifierSchema: Schema<ItemIdentifier> = s.object<ItemIdentifier>({
  identifierType: s.optional(s.lazy(() => identifierTypeSchema)),
  identifier: s.optional(s.string()),
  marketplaceId: s.optional(s.string()),
});
