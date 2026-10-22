import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { strategyCollectionSchema, type StrategyCollection } from "./strategy-collection.js";

export type V3RepricerStrategiesResponse = {
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  totalElements?: number;
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  strategyCollections?: StrategyCollection[];
};

export const v3RepricerStrategiesResponseSchema: Schema<V3RepricerStrategiesResponse> =
  s.object<V3RepricerStrategiesResponse>({
    totalElements: s.optional(s.int()),
    strategyCollections: s.optional(s.array(s.lazy(() => strategyCollectionSchema))),
  });
