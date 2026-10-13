import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { commonPrepInstructionSchema, type CommonPrepInstruction } from "./common-prep-instruction.js";

/** Information associated with a single SKU in the seller's catalog. */
export type CommonItem = {
  /** The merchant-defined SKU ID. */
  msku: string;
  /**
   * The expiration date of the MSKU. In ISO 8601 date format with pattern `YYYY-MM-DD`. The same
   * MSKU with different expiration dates cannot go into the same box.
   */
  expiration?: string;
  /** Specifies who will label the items. Options include `SELLER` and `NONE`. */
  labelOwner: string;
  /** The manufacturing lot code. */
  manufacturingLotCode?: string;
  /** Special preparations that are required for an item. */
  prepInstructions: CommonPrepInstruction[];
  /** The number of the specified MSKU. */
  quantity: number;
};

export const commonItemSchema: Schema<CommonItem> = s.object<CommonItem>({
  msku: s.string(),
  expiration: s.optional(s.string()),
  labelOwner: s.string(),
  manufacturingLotCode: s.optional(s.string()),
  prepInstructions: s.array(s.lazy(() => commonPrepInstructionSchema)),
  quantity: s.int(),
});
