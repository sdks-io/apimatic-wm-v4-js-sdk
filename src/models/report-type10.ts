import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ReportType10 = {
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
  SemPerformance: "SEM_PERFORMANCE",
} as const;
export type ReportType10 = (typeof ReportType10)[keyof typeof ReportType10] | (string & {});

export const reportType10Schema: EnumSchema<ReportType10> = s.enumOf<ReportType10>(ReportType10);
