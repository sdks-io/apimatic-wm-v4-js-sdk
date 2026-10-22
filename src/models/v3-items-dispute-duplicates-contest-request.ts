import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { issues1Schema, type Issues1 } from "./issues1.js";

export type V3ItemsDisputeDuplicatesContestRequest = {
  /**
   * Items status included in the response list.
   *
   * <strong style="color: green;">**Market availability: US only**</strong>
   */
  issues: Issues1[];
};

export const v3ItemsDisputeDuplicatesContestRequestSchema: Schema<V3ItemsDisputeDuplicatesContestRequest> =
  s.object<V3ItemsDisputeDuplicatesContestRequest>({
    issues: s.array(s.lazy(() => issues1Schema)),
  });
