import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { channelSchema, type Channel } from "./channel.js";

export type ChannelList = {
  channels?: Channel[];
};

export const channelListSchema: Schema<ChannelList> = s.object<ChannelList>({
  channels: s.optional(s.array(s.lazy(() => channelSchema))),
});
