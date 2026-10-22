import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { programActionFeedHeaderSchema, type ProgramActionFeedHeader } from "./program-action-feed-header.js";
import { programAction1Schema, type ProgramAction1 } from "./program-action1.js";

export type V3FeedsFeedTypeIncentiveEnrollmentRequest = {
  /** <br><b style='color:green;'>Market availability: US</b> */
  programActionFeedHeader?: ProgramActionFeedHeader;
  programAction?: ProgramAction1[];
};

export const v3FeedsFeedTypeIncentiveEnrollmentRequestSchema: Schema<V3FeedsFeedTypeIncentiveEnrollmentRequest> =
  s.object<V3FeedsFeedTypeIncentiveEnrollmentRequest>({
    programActionFeedHeader: s.optional(s.lazy(() => programActionFeedHeaderSchema)),
    programAction: s.optional(s.array(s.lazy(() => programAction1Schema))),
    _keysMap: {
      programActionFeedHeader: "ProgramActionFeedHeader",
      programAction: "ProgramAction",
    },
  });
