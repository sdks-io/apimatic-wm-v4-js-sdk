import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The state and country from where the item is shipped. */
export type ShipsFromType = {
  /** The state from where the item is shipped. */
  state?: string;
  /** The country from where the item is shipped. */
  country?: string;
};

export const shipsFromTypeSchema: Schema<ShipsFromType> = s.object<ShipsFromType>({
  state: s.optional(s.string()),
  country: s.optional(s.string()),
  _keysMap: {
    state: "State",
    country: "Country",
  },
});
