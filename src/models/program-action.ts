import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { itemIdentifiersSchema, type ItemIdentifiers } from "./item-identifiers.js";
import { programsSchema, type Programs } from "./programs.js";

/** This includes all the SKU IDs and the type of shipping configuration to migrate. */
export type ProgramAction = {
  /** <br><b style='color:green;'>Market availability: US</b> */
  itemIdentifiers?: ItemIdentifiers;
  programs?: Programs;
};

export const programActionSchema: Schema<ProgramAction> = s.object<ProgramAction>({
  itemIdentifiers: s.optional(s.lazy(() => itemIdentifiersSchema)),
  programs: s.optional(s.lazy(() => programsSchema)),
  _keysMap: {
    itemIdentifiers: "ItemIdentifiers",
    programs: "Programs",
  },
});
