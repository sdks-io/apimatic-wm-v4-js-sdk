import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Specifies the type of report to be generated. Example: ITEM for Item Report. */
export const ReportType11 = {
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
  SemPerformance: "SEM_PERFORMANCE",
} as const;
export type ReportType11 = (typeof ReportType11)[keyof typeof ReportType11] | (string & {});

export const reportType11Schema: EnumSchema<ReportType11> = s.enumOf<ReportType11>(ReportType11);
