import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { nameSchema, type Name } from "./name.js";

export type ResearchingQuantityEntry = {
  /** Duration category of the investigation. */
  name?: Name;
  /** Number of units in this investigation duration category. */
  quantity?: number;
};

export const researchingQuantityEntrySchema: Schema<ResearchingQuantityEntry> =
  s.object<ResearchingQuantityEntry>({
    name: s.optional(s.lazy(() => nameSchema)),
    quantity: s.optional(s.int()),
  });
