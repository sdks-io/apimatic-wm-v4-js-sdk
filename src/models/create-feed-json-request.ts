import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreateFeedJsonRequest = {
  /** Feed payload as inline JSON. Structure varies by feedType. */
  feedData: Record<string, unknown>;
};

export const createFeedJsonRequestSchema: Schema<CreateFeedJsonRequest> = s.object<CreateFeedJsonRequest>({
  feedData: s.record(s.string(), s.unknown()),
});
