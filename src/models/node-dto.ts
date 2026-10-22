import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { availToSellQtySchema, type AvailToSellQty } from "./avail-to-sell-qty.js";
import { error4Schema, type Error4 } from "./error4.js";
import { inputQtySchema, type InputQty } from "./input-qty.js";
import { supplyQuantitySchema, type SupplyQuantity } from "./supply-quantity.js";

export type NodeDto = {
  /** ShipNode Id of the ship node for which the inventory is requested */
  shipNode?: string;
  /** Quantity of an item that is input by the seller */
  inputQty?: InputQty;
  /** Quantity of an item that is available to be allocated to orders. */
  availToSellQty?: AvailToSellQty;
  errors?: Error4[];
  /** Inventory available date for a ship node. Format:YYYY-MM-DD */
  inventoryAvailableDate?: string;
  /** Quantity that has been ordered by the customers but not yet shipped. */
  reservedQty?: SupplyQuantity;
};

export const nodeDtoSchema: Schema<NodeDto> = s.object<NodeDto>({
  shipNode: s.optional(s.string()),
  inputQty: s.optional(s.lazy(() => inputQtySchema)),
  availToSellQty: s.optional(s.lazy(() => availToSellQtySchema)),
  errors: s.optional(s.array(s.lazy(() => error4Schema))),
  inventoryAvailableDate: s.optional(s.string()),
  reservedQty: s.optional(s.lazy(() => supplyQuantitySchema)),
});
