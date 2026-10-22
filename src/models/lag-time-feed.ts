import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { lagTimeHeaderSchema, type LagTimeHeader } from "./lag-time-header.js";
import { lagTime1Schema, type LagTime1 } from "./lag-time1.js";

export type LagTimeFeed = {
  lagTimeHeader: LagTimeHeader;
  lagTime?: LagTime1[];
};

export const lagTimeFeedSchema: Schema<LagTimeFeed> = s.object<LagTimeFeed>({
  lagTimeHeader: lagTimeHeaderSchema,
  lagTime: s.optional(s.array(s.lazy(() => lagTime1Schema))),
});
