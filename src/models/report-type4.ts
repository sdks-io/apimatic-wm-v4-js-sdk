import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ReportType4 = {
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
  FitmentMissingAttr: "FITMENT_MISSING_ATTR",
  FitmentAcesCoverage: "FITMENT_ACES_COVERAGE",
  Buybox: "BUYBOX",
  AssortmentRecommendations: "ASSORTMENT_RECOMMENDATIONS",
  Lagtime: "LAGTIME",
  InventoryRecommendations: "INVENTORY_RECOMMENDATIONS",
} as const;
export type ReportType4 = (typeof ReportType4)[keyof typeof ReportType4] | (string & {});

export const reportType4Schema: EnumSchema<ReportType4> = s.enumOf<ReportType4>(ReportType4);
