import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Contains only a starting DateTime. */
export type CommonWindowInput = {
  /** The start date of the window. In ISO 8601 datetime format with minute precision. */
  start: Date;
};

export const commonWindowInputSchema: Schema<CommonWindowInput> = s.object<CommonWindowInput>({
  start: s.dateTime(),
});
