import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { commonRequestedUpdatesSchema, type CommonRequestedUpdates } from "./common-requested-updates.js";
import {
  commonTransportationOptionSchema,
  type CommonTransportationOption,
} from "./common-transportation-option.js";

/** Preview of the changes that will be applied to the shipment. */
export type CommonContentUpdatePreview = {
  /** Identifier of a content update preview. */
  contentUpdatePreviewId: string;
  /**
   * The time at which the content update expires. In ISO 8601 datetime format with pattern
   * `yyyy-MM-ddTHH:mm:ss.sssZ`.
   */
  expiration: Date;
  /** Objects that were included in the update request. */
  requestedUpdates: CommonRequestedUpdates;
  /** Contains information pertaining to a transportation option and the related carrier. */
  transportationOption: CommonTransportationOption;
};

export const commonContentUpdatePreviewSchema: Schema<CommonContentUpdatePreview> =
  s.object<CommonContentUpdatePreview>({
    contentUpdatePreviewId: s.string(),
    expiration: s.dateTime(),
    requestedUpdates: commonRequestedUpdatesSchema,
    transportationOption: commonTransportationOptionSchema,
  });
