import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { supplyQuantitySchema, type SupplyQuantity } from "./supply-quantity.js";

export type UpdateInventoriesRequestNodeDto = {
  /** ShipNode Id of the ship node for which the inventory is requested */
  shipNode: string;
  /** Quantity that has been ordered by the customers but not yet shipped. */
  inputQty: SupplyQuantity;
  /** Inventory available date for a ship node. Format:YYYY-MM-DD */
  inventoryAvailableDate?: string;
};

export const updateInventoriesRequestNodeDtoSchema: Schema<UpdateInventoriesRequestNodeDto> =
  s.object<UpdateInventoriesRequestNodeDto>({
    shipNode: s.string(),
    inputQty: supplyQuantitySchema,
    inventoryAvailableDate: s.optional(s.string()),
  });
