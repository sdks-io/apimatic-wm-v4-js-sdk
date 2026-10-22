import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { itemIdentifiersSchema, type ItemIdentifiers } from "./item-identifiers.js";
import { programs1Schema, type Programs1 } from "./programs1.js";

/** items> */
export type ProgramAction1 = {
  /** <br><b style='color:green;'>Market availability: US</b> */
  itemIdentifiers?: ItemIdentifiers;
  programs?: Programs1;
};

export const programAction1Schema: Schema<ProgramAction1> = s.object<ProgramAction1>({
  itemIdentifiers: s.optional(s.lazy(() => itemIdentifiersSchema)),
  programs: s.optional(s.lazy(() => programs1Schema)),
  _keysMap: {
    itemIdentifiers: "ItemIdentifiers",
    programs: "Programs",
  },
});
