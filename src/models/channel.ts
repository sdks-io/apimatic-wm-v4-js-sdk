import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Channel = {
  channelOwner: string;
  channelName: string;
  type: string;
  webhookConfig?: Record<string, unknown>;
  status?: string;
  channelId?: string;
  createdTimestamp?: number;
  lastModifiedTimestamp?: number;
};

export const channelSchema: Schema<Channel> = s.object<Channel>({
  channelOwner: s.string(),
  channelName: s.string(),
  type: s.string(),
  webhookConfig: s.optional(s.record(s.string(), s.unknown())),
  status: s.optional(s.string()),
  channelId: s.optional(s.string()),
  createdTimestamp: s.optional(s.int()),
  lastModifiedTimestamp: s.optional(s.int()),
});
