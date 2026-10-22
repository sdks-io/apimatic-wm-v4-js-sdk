import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { itemDtoSchema, type ItemDto } from "./item-dto.js";

export type FormInfoDto = {
  /** Indicates whether multiple statements are combined into a single form. */
  combined?: string;
  /** Represents an aggregated view or rolled-up status of the form. */
  rollup?: string;
  /** The display name of the tax form (for example, 1099-K). */
  name?: string;
  /** Internal flag character used for processing. */
  fChar?: string;
  /** List of item-level details associated with the tax form. */
  items?: ItemDto[];
};

export const formInfoDtoSchema: Schema<FormInfoDto> = s.object<FormInfoDto>({
  combined: s.optional(s.string()),
  rollup: s.optional(s.string()),
  name: s.optional(s.string()),
  fChar: s.optional(s.string()),
  items: s.optional(s.array(s.lazy(() => itemDtoSchema))),
});
