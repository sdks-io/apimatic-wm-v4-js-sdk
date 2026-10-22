import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { claimTypeSchema, type ClaimType } from "./claim-type.js";

/** Claim details. */
export type Payload = {
  /** Marketplace purchase-order number associated with the item in this claim. */
  purchaseOrderNo: string;
  /** Line number within the purchase order that maps to the claimed SKU. */
  purchaseOrderLineNo: string;
  /** Customer sales-order number for the shipment. */
  salesOrderNo: string;
  /** Line number within the sales order that maps to the claimed SKU. */
  salesOrderLineNo: string;
  /** Identifier for the fulfiller’s line item in the warehouse/fulfillment center manifest. */
  fulfillerLineId: string;
  /** Number of units being claimed for this line. */
  quantity: number;
  /** Return-order ID that triggered or is linked to the claim. */
  returnOrderId: string;
  /** Claim category: LIT (lost in transit), LAD (lost after delivery), or DAMAGED. */
  claimType: ClaimType;
  /** Free-form claim notes from the seller. */
  notes?: string;
};

export const payloadSchema: Schema<Payload> = s.object<Payload>({
  purchaseOrderNo: s.string(),
  purchaseOrderLineNo: s.string(),
  salesOrderNo: s.string(),
  salesOrderLineNo: s.string(),
  fulfillerLineId: s.string(),
  quantity: s.int(),
  returnOrderId: s.string(),
  claimType: claimTypeSchema,
  notes: s.optional(s.string()),
});
