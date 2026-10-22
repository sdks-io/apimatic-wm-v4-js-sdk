import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { availToSellQtySchema, type AvailToSellQty } from "./avail-to-sell-qty.js";
import { inputQtySchema, type InputQty } from "./input-qty.js";
import { supplyQuantitySchema, type SupplyQuantity } from "./supply-quantity.js";

export type GetAllInventoriesNodeDto = {
  /** ShipNode Id of the ship node for which the inventory is requested */
  shipNode?: string;
  /** Quantity of an item that is input by the seller */
  inputQty?: InputQty;
  /** Quantity of an item that is available to be allocated to orders. */
  availToSellQty?: AvailToSellQty;
  /** Quantity that has been ordered by the customers but not yet shipped. */
  reservedQty?: SupplyQuantity;
};

export const getAllInventoriesNodeDtoSchema: Schema<GetAllInventoriesNodeDto> =
  s.object<GetAllInventoriesNodeDto>({
    shipNode: s.optional(s.string()),
    inputQty: s.optional(s.lazy(() => inputQtySchema)),
    availToSellQty: s.optional(s.lazy(() => availToSellQtySchema)),
    reservedQty: s.optional(s.lazy(() => supplyQuantitySchema)),
  });
