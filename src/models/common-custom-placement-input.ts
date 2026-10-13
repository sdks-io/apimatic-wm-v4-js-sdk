import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { commonItemInputSchema, type CommonItemInput } from "./common-item-input.js";

/** Provide units going to the ship node. */
export type CommonCustomPlacementInput = {
  /** Items included while creating Inbound Plan. */
  items: CommonItemInput[];
  /** Ship Node ID. */
  warehouseId: string;
};

export const commonCustomPlacementInputSchema: Schema<CommonCustomPlacementInput> =
  s.object<CommonCustomPlacementInput>({
    items: s.array(s.lazy(() => commonItemInputSchema)),
    warehouseId: s.string(),
  });
