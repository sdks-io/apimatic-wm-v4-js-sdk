import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { itemIdentifiersSchema, type ItemIdentifiers } from "./item-identifiers.js";
import { programs21Schema, type Programs21 } from "./programs21.js";

/** This includes all the SKU IDs and the type of shipping configuration to migrate. */
export type ProgramAction11 = {
  /**
   * The type of shipping configuration to migrate. <br><b style='color:green;'>Market availability:
   * US</span></b>
   */
  programs?: Programs21;
  /**
   * Item Identifier which needs to be migrated. <br><b style='color:green;'>Market availability:
   * US</span></b>
   */
  itemIdentifiers?: ItemIdentifiers;
};

export const programAction11Schema: Schema<ProgramAction11> = s.object<ProgramAction11>({
  programs: s.optional(s.lazy(() => programs21Schema)),
  itemIdentifiers: s.optional(s.lazy(() => itemIdentifiersSchema)),
  _keysMap: {
    programs: "Programs",
    itemIdentifiers: "ItemIdentifiers",
  },
});
