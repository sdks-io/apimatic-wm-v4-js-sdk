import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  commonItemLabelPageTypeSchema,
  type CommonItemLabelPageType,
} from "./common-item-label-page-type.js";
import { commonLabelPrintTypeSchema, type CommonLabelPrintType } from "./common-label-print-type.js";
import { commonMskuQuantitySchema, type CommonMskuQuantity } from "./common-msku-quantity.js";

/** The `createMarketplaceItemLabels` request. */
export type CreateMarketplaceItemLabelsRequest = {
  /** The height of the item label. */
  height?: number;
  /** Indicates the type of print type for a given label. */
  labelType: CommonLabelPrintType;
  /**
   * The locale code constructed from ISO 639 language code and ISO 3166-1 alpha-2 country codes
   * separated by an underscore character.
   *
   * @default "en_US"
   */
  localeCode?: string;
  /**
   * The Walmart Marketplace ID. For a list of possible values, refer to [Marketplace
   * IDs](https://developer-docs.walmart.com/seller-api/docs/marketplace-ids).
   */
  marketplaceId: string;
  /** Represents the quantity of an MSKU to print item labels for. */
  mskuQuantities: CommonMskuQuantity[];
  /** The page type to use to print the labels. */
  pageType?: CommonItemLabelPageType;
  /** The width of the item label. */
  width?: number;
};

export const createMarketplaceItemLabelsRequestSchema: Schema<CreateMarketplaceItemLabelsRequest> =
  s.object<CreateMarketplaceItemLabelsRequest>({
    height: s.optional(s.float64()),
    labelType: commonLabelPrintTypeSchema,
    localeCode: s.defaulted(s.string(), "en_US"),
    marketplaceId: s.string(),
    mskuQuantities: s.array(s.lazy(() => commonMskuQuantitySchema)),
    pageType: s.optional(s.lazy(() => commonItemLabelPageTypeSchema)),
    width: s.optional(s.float64()),
  });
