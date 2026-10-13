import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Optional fulfillment program override for WFS items. */
export const OptionalFulfillmentProgram = {
  WfsStandard: "WFS_STANDARD",
  WfsExpedited: "WFS_EXPEDITED",
} as const;
export type OptionalFulfillmentProgram =
  | (typeof OptionalFulfillmentProgram)[keyof typeof OptionalFulfillmentProgram]
  | (string & {});

export const optionalFulfillmentProgramSchema: EnumSchema<OptionalFulfillmentProgram> =
  s.enumOf<OptionalFulfillmentProgram>(OptionalFulfillmentProgram);
