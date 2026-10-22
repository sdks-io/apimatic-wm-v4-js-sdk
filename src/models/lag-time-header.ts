import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LagTimeHeader = {
  version?: string;
  feedDate?: string;
};

export const lagTimeHeaderSchema: Schema<LagTimeHeader> = s.object<LagTimeHeader>({
  version: s.optional(s.string()),
  feedDate: s.optional(s.string()),
});
