import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Location = {
  city?: string;
  stateOrRegion?: string;
  countryCode?: string;
  postalCode?: string;
};

export const locationSchema: Schema<Location> = s.object<Location>({
  city: s.optional(s.string()),
  stateOrRegion: s.optional(s.string()),
  countryCode: s.optional(s.string()),
  postalCode: s.optional(s.string()),
});
