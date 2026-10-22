import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * | Attribute | Description | Data Type
 * | --- | ----------- | -------
 * | contentDiscoverabilityPercentage<br><b style='color:green;'>Market availability: US, CA, MX</b> | Item's content and discoverability score expressed as a percentage. | string |
 * | qualityScorePercentage<br><b style='color:green;'>Market availability: US, CA, MX</b> | Item's overall Listing Quality score, rated as a percentage. | string |
 * | offerPercentage<br><b style='color:green;'>Market availability: US, CA, MX</b> | Item's offer score, based on: item price, shipping price and speed, and in-stock rate.| string |
 * | ratingReviewsPercentage<br><b style='color:green;'>Market availability: US, CA, MX</b> | Rating and reviews score, as a percentage. | string |
 * | viewTrendingItems<br><b style='color:green;'>Market availability: US, CA, MX</b> | Indicates to return details for trending items that have non-zero page views. Acceptable values are "true" if pageView > 0, or "false" if pageView >= 0. | string |
 * | viewPostPurchaseItems<br><b style='color:green;'>Market availability: US, CA, MX</b> | Show items with post-purchase quality issues. If item has post-purchase value >= 1, it filters all items greater or equal based on post purchase value. | string |
 * | wfsFlag<br><b style='color:green;'>Market availability: US, CA, MX</b> | Show WFS-eligible items. Value of this parameter can be true or false. | string |
 * | categoryName<br><b style='color:green;'>Market availability: US, CA, MX</b> | Item's category name. | string |
 * | hasIssues<br><b style='color:green;'>Market availability: US, CA, MX</b> | Provides a count of item with issues. | integer |
 * | productType<br><b style='color:green;'>Market availability: US, CA, MX</b> | Product type to classify the item (e.g. Pants). | string|
 * | attributeList<br><b style='color:green;'>Market availability: US, CA, MX</b> | List of all available filter attributes. | string |
 * | productTypes<br><b style='color:green;'>Market availability: US, CA, MX</b> | List of all available product. | List<String> |
 * | brandList<br><b style='color:green;'>Market availability: US, CA, MX</b> | List of all available brand. | List<String> |
 * | oos<br><b style='color:green;'>Market availability: US, CA, MX</b> | Filter using out of stock offer based on days. Min value = 0, Max Value = 7. | integer |
 * | fastAndFreeShipping<br><b style='color:green;'>Market availability: US, CA, MX</b> | Possible values are 1 for offers eligible for free shipping and 0 for offers not eligible for free shipping. No value shows all the offers. | integer |
 * | priceMeetBeatFlag<br><b style='color:green;'>Market availability: US, CA,  MX</b> | Possible values are -1 for no match, 0 for lose, 1 for meets and 2 for beats. No value shows all the offers. | integer |
 * | conditionList<br><b style='color:green;'>Market availability: US, CA, MX</b> | Specifies the condition of the item. Can take values (New, New without box, New without tags, Restored Premium, Restored, Remanufactured, Open Box, Pre-Owned: Like New, Pre-Owned: Good, Pre-Owned: Fair, New with defects) | List<String>
 */
export const Field5 = {
  ContentDiscoverabilityPercentage: "contentDiscoverabilityPercentage",
  QualityScorePercentage: "qualityScorePercentage",
  OfferPercentage: "offerPercentage",
  RatingReviewsPercentage: "ratingReviewsPercentage",
  ViewTrendingItems: "viewTrendingItems",
  ViewPostPurchaseItems: "viewPostPurchaseItems",
  WfsFlag: "wfsFlag",
  CategoryName: "categoryName",
  HasIssues: "hasIssues",
  ProductType: "productType",
  AttributeList: "attributeList",
  ProductTypes: "productTypes",
  BrandList: "brandList",
  Oos: "oos",
  FastAndFreeShipping: "fastAndFreeShipping",
  PriceMeetBeatFlag: "priceMeetBeatFlag",
  ConditionList: "conditionList",
} as const;
export type Field5 = (typeof Field5)[keyof typeof Field5] | (string & {});

export const field5Schema: EnumSchema<Field5> = s.enumOf<Field5>(Field5);
