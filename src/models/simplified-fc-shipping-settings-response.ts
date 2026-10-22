import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  simplifiedFcShippingSettingsDtoSchema,
  type SimplifiedFcShippingSettingsDto,
} from "./simplified-fc-shipping-settings-dto.js";

export type SimplifiedFcShippingSettingsResponse = {
  /** Simplified Shipping Settings */
  simplifiedShippingSettings?: SimplifiedFcShippingSettingsDto;
};

export const simplifiedFcShippingSettingsResponseSchema: Schema<SimplifiedFcShippingSettingsResponse> =
  s.object<SimplifiedFcShippingSettingsResponse>({
    simplifiedShippingSettings: s.optional(s.lazy(() => simplifiedFcShippingSettingsDtoSchema)),
  });
