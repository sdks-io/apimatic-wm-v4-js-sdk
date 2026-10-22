import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  simplifiedFcShippingSettingsDtoSchema,
  type SimplifiedFcShippingSettingsDto,
} from "./simplified-fc-shipping-settings-dto.js";

export type UpdateFcLevelSimplifiedShippingSettingsRequest = {
  /** Simplified Shipping Settings */
  simplifiedShippingSettings?: SimplifiedFcShippingSettingsDto;
};

export const updateFcLevelSimplifiedShippingSettingsRequestSchema: Schema<UpdateFcLevelSimplifiedShippingSettingsRequest> =
  s.object<UpdateFcLevelSimplifiedShippingSettingsRequest>({
    simplifiedShippingSettings: s.optional(s.lazy(() => simplifiedFcShippingSettingsDtoSchema)),
  });
