import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Points = {
  pointsNumber?: number;
};

export const pointsSchema: Schema<Points> = s.object<Points>({
  pointsNumber: s.optional(s.int()),
});
