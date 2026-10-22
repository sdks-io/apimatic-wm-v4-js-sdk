import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  simplifiedShippingSettingsDtoSchema,
  type SimplifiedShippingSettingsDto,
} from "./simplified-shipping-settings-dto.js";

export type SimplifiedShippingSettingsResponse = {
  /** Simplified Shipping Settings */
  simplifiedShippingSettings?: SimplifiedShippingSettingsDto;
};

export const simplifiedShippingSettingsResponseSchema: Schema<SimplifiedShippingSettingsResponse> =
  s.object<SimplifiedShippingSettingsResponse>({
    simplifiedShippingSettings: s.optional(s.lazy(() => simplifiedShippingSettingsDtoSchema)),
  });
