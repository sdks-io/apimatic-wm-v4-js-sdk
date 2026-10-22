import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  programActionFeedHeader11Schema,
  type ProgramActionFeedHeader11,
} from "./program-action-feed-header11.js";
import { programAction11Schema, type ProgramAction11 } from "./program-action11.js";

export type V3FeedsRequest1 = {
  /**
   * ProgramAction feed header details. <br><b style='color:green;'>Market availability:
   * US</span></b>
   */
  programActionFeedHeader?: ProgramActionFeedHeader11;
  /**
   * This includes all the SKU IDs and the type of shipping configuration to migrate. <br><b
   * style='color:green;'>Market availability: US</span></b>
   */
  programAction?: ProgramAction11[];
};

export const v3FeedsRequest1Schema: Schema<V3FeedsRequest1> = s.object<V3FeedsRequest1>({
  programActionFeedHeader: s.optional(s.lazy(() => programActionFeedHeader11Schema)),
  programAction: s.optional(s.array(s.lazy(() => programAction11Schema))),
  _keysMap: {
    programActionFeedHeader: "ProgramActionFeedHeader",
    programAction: "ProgramAction",
  },
});
