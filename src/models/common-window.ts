import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Contains a start and end DateTime representing a time range. */
export type CommonWindow = {
  /** The timestamp at which this window can no longer be edited. */
  editableUntil?: Date;
  /** The end timestamp of the window. */
  end: Date;
  /** The start timestamp of the window. */
  start: Date;
};

export const commonWindowSchema: Schema<CommonWindow> = s.object<CommonWindow>({
  editableUntil: s.optional(s.dateTime()),
  end: s.dateTime(),
  start: s.dateTime(),
});
