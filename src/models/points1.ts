import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Walmart Rewards points. */
export type Points1 = {
  pointsNumber?: number;
};

export const points1Schema: Schema<Points1> = s.object<Points1>({
  pointsNumber: s.optional(s.int()),
  _keysMap: {
    pointsNumber: "PointsNumber",
  },
});
