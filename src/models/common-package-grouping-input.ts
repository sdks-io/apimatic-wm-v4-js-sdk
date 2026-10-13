import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { commonBoxInputSchema, type CommonBoxInput } from "./common-box-input.js";

/** Packing information for the inbound plan. */
export type CommonPackageGroupingInput = {
  /** Box level information being provided. */
  boxes: CommonBoxInput[];
  /**
   * The ID of the `packingGroup` that packages are grouped according to. Provide before placement
   * confirmation.
   */
  packingGroupId?: string;
  /**
   * The ID of the shipment that packages are grouped according to. Provide after placement
   * confirmation.
   */
  shipmentId?: string;
};

export const commonPackageGroupingInputSchema: Schema<CommonPackageGroupingInput> =
  s.object<CommonPackageGroupingInput>({
    boxes: s.array(s.lazy(() => commonBoxInputSchema)),
    packingGroupId: s.optional(s.string()),
    shipmentId: s.optional(s.string()),
  });
