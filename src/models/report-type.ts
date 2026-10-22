import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of report for which the request is created. Example, ITEM for Item Report. */
export const ReportType = {
  Item: "ITEM",
  Inventory: "INVENTORY",
  Cancellation: "CANCELLATION",
  DeliveryDefect: "DELIVERY_DEFECT",
  ItemPerformance: "ITEM_PERFORMANCE",
  Promo: "PROMO",
  ReturnOverrides: "RETURN_OVERRIDES",
  Cpa: "CPA",
  ShippingConfiguration: "SHIPPING_CONFIGURATION",
  ShippingProgram: "SHIPPING_PROGRAM",
  Buybox: "BUYBOX",
  AssortmentRecommendations: "ASSORTMENT_RECOMMENDATIONS",
  Lagtime: "LAGTIME",
  InventoryRecommendations: "INVENTORY_RECOMMENDATIONS",
} as const;
export type ReportType = (typeof ReportType)[keyof typeof ReportType] | (string & {});

export const reportTypeSchema: EnumSchema<ReportType> = s.enumOf<ReportType>(ReportType);
