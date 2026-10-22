import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { strategy2Schema, type Strategy2 } from "./strategy2.js";

export type StrategyCollection = {
  /**
   * Specifies the name of the strategy collection. This value is used to group and manage related
   * repricing strategies.<br><b style='color:green;'>Market availability: US | CA | MX</b>
   */
  repricerStrategy?: string;
  /**
   * Unique identifier used to group and manage repricing strategies across different
   * resources.<br><b style='color:green;'>Market availability: US | CA | MX</b>
   */
  strategyCollectionId?: string;
  /**
   * Indicates the current status of the strategy collection.<br><b style='color:green;'>Market
   * availability: US | CA | MX</b>
   */
  enabled?: boolean;
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  assignedCount?: number;
  /**
   * Indicates whether the item is eligible for promotional repricing. Set this to true to enable
   * repricing for promotional items.<br><b style='color:green;'>Market availability: US | MX</b>
   */
  enableRepricerForPromotion?: boolean;
  /**
   * Reprices the item price back to the last submitted price if no competitor price is found.<br><b
   * style='color:green;'>Market availability: US only</b>
   */
  restoreSellerPriceWithoutTarget?: boolean;
  /**
   * Indicates whether to match external competitor prices to beat the Buy Box price. This is only
   * applicable for Buy Box strategies.<br><b style='color:green;'>Market availability: US | MX</b>
   */
  enableBuyboxMeetExternal?: boolean;
  /**
   * Indicates whether to compare only against 3P offers.<br><b style='color:green;'>Market
   * availability: US only</span></b>
   */
  compareWith3POfferOnly?: boolean;
  /**
   * Defines one or more repricing strategies to apply.<br><b style='color:green;'>Market
   * availability: US | CA | MX</b>
   */
  strategies?: Strategy2[];
};

export const strategyCollectionSchema: Schema<StrategyCollection> = s.object<StrategyCollection>({
  repricerStrategy: s.optional(s.string()),
  strategyCollectionId: s.optional(s.string()),
  enabled: s.optional(s.boolean()),
  assignedCount: s.optional(s.int()),
  enableRepricerForPromotion: s.optional(s.boolean()),
  restoreSellerPriceWithoutTarget: s.optional(s.boolean()),
  enableBuyboxMeetExternal: s.optional(s.boolean()),
  compareWith3POfferOnly: s.optional(s.boolean()),
  strategies: s.optional(s.array(s.lazy(() => strategy2Schema))),
  _keysMap: {
    compareWith3POfferOnly: "compareWith3pOfferOnly",
  },
});
