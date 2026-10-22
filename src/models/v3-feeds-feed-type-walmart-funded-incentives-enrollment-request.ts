import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { programActionFeedHeaderSchema, type ProgramActionFeedHeader } from "./program-action-feed-header.js";
import { programActionSchema, type ProgramAction } from "./program-action.js";

export type V3FeedsFeedTypeWalmartFundedIncentivesEnrollmentRequest = {
  /** <br><b style='color:green;'>Market availability: US</b> */
  programActionFeedHeader?: ProgramActionFeedHeader;
  programAction?: ProgramAction[];
};

export const v3FeedsFeedTypeWalmartFundedIncentivesEnrollmentRequestSchema: Schema<V3FeedsFeedTypeWalmartFundedIncentivesEnrollmentRequest> =
  s.object<V3FeedsFeedTypeWalmartFundedIncentivesEnrollmentRequest>({
    programActionFeedHeader: s.optional(s.lazy(() => programActionFeedHeaderSchema)),
    programAction: s.optional(s.array(s.lazy(() => programActionSchema))),
    _keysMap: {
      programActionFeedHeader: "ProgramActionFeedHeader",
      programAction: "ProgramAction",
    },
  });
