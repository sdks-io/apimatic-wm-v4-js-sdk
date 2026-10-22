import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { competitorItemInfoSchema, type CompetitorItemInfo } from "./competitor-item-info.js";
import { demandSalesTrendsSchema, type DemandSalesTrends } from "./demand-sales-trends.js";
import { itemAvailabilityStatusSchema, type ItemAvailabilityStatus } from "./item-availability-status.js";
import { salesInsightsSchema, type SalesInsights } from "./sales-insights.js";
import { walmartItemInfoSchema, type WalmartItemInfo } from "./walmart-item-info.js";

/** Details of the recommended item. */
export type ItemDetails = {
  /** Title of the recommended item */
  title?: string;
  /** Brand of the recommended item */
  brand?: string;
  /** Category of the recommended item */
  category?: string;
  /**
   * Indicates the product type of an item that can be used to set up this item using Item Setup
   * APIs or Item setup bulk upload.
   */
  productType?: string;
  /** GTIN of the recommended item */
  gtin?: string;
  /** Universal Product Code (UPC) of the recommended item. */
  upc?: string;
  /** ISBN of the recommended item */
  isbn?: string;
  /** European Article Number (EAN) of the recommended item. */
  ean?: string;
  /**
   * Item availability status of the recommended item.
   *
   * | Attribute | Description | Data Type |
   * | --- | ----------- | ------- |
   * | EXISTING_IN_WALMART | Indicates that item is existing in Walmart. | string |
   * | NEW_TO_WALMART | Indicates that item is new to Walmart. | string |
   */
  itemAvailabilityStatus?: ItemAvailabilityStatus;
  /**
   * Indicates the potential revenue the recommended item can bring in over a year. This field does
   * not promise the numbers indicated.
   */
  potentialSales?: string;
  /**
   * Rank of an item, from 1 to 10 (1 being highest), that indicates the relative potential sales of
   * a product in a category. This is an estimate based on customer demand, historical category
   * sales and other data points.
   */
  potentialSalesRank?: string;
  /**
   * Tags that indicate why an item is in demand, helping sellers quickly assess customer interest
   * and competitive signal. <br><b style='color:green;'>Market availability: US | CA | MX</b>
   */
  salesInsights?: SalesInsights;
  /**
   * This field is deprecated.
   *
   * @deprecated
   */
  shoppingTrends?: string[] | null;
  /**
   * Indicates the months of the year when high demand is observed for the recommended item. The
   * sequence of month is in the decreasing order of the high demand. The values are comma
   * separated.
   *
   * | Attribute | Description | Data Type |
   * | --- | ----------- | ------- |
   * | JAN, FEB, MAR, APR, MAY, JUN, JUL, AUG, SEP, OCT, NOV, DEC | Months of the year. | string |
   */
  demandSalesTrends?: DemandSalesTrends;
  /** Walmart's item information */
  walmart?: WalmartItemInfo;
  /** Competitor's item information */
  competitors?: CompetitorItemInfo[];
};

export const itemDetailsSchema: Schema<ItemDetails> = s.object<ItemDetails>({
  title: s.optional(s.string()),
  brand: s.optional(s.string()),
  category: s.optional(s.string()),
  productType: s.optional(s.string()),
  gtin: s.optional(s.string()),
  upc: s.optional(s.string()),
  isbn: s.optional(s.string()),
  ean: s.optional(s.string()),
  itemAvailabilityStatus: s.optional(s.lazy(() => itemAvailabilityStatusSchema)),
  potentialSales: s.optional(s.string()),
  potentialSalesRank: s.optional(s.string()),
  salesInsights: s.optional(s.lazy(() => salesInsightsSchema)),
  shoppingTrends: s.optionalNullable(s.array(s.string())),
  demandSalesTrends: s.optional(s.lazy(() => demandSalesTrendsSchema)),
  walmart: s.optional(s.lazy(() => walmartItemInfoSchema)),
  competitors: s.optional(s.array(s.lazy(() => competitorItemInfoSchema))),
});
