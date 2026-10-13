import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  researchingQuantityEntrySchema,
  type ResearchingQuantityEntry,
} from "./researching-quantity-entry.js";

/** Units under investigation for inventory discrepancies. */
export type ResearchingQuantity = {
  /** Total units currently under investigation. */
  totalResearchingQuantity?: number | null;
  /** Breakdown of researching units by investigation duration. */
  researchingQuantityBreakdown?: ResearchingQuantityEntry[];
};

export const researchingQuantitySchema: Schema<ResearchingQuantity> = s.object<ResearchingQuantity>({
  totalResearchingQuantity: s.optionalNullable(s.int()),
  researchingQuantityBreakdown: s.optional(s.array(s.lazy(() => researchingQuantityEntrySchema))),
});
