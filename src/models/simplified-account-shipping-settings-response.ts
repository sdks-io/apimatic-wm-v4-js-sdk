import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  simplifiedAccountShippingSettingsDtoSchema,
  type SimplifiedAccountShippingSettingsDto,
} from "./simplified-account-shipping-settings-dto.js";

export type SimplifiedAccountShippingSettingsResponse = {
  /** Simplified Shipping Settings */
  simplifiedShippingSettings?: SimplifiedAccountShippingSettingsDto;
};

export const simplifiedAccountShippingSettingsResponseSchema: Schema<SimplifiedAccountShippingSettingsResponse> =
  s.object<SimplifiedAccountShippingSettingsResponse>({
    simplifiedShippingSettings: s.optional(s.lazy(() => simplifiedAccountShippingSettingsDtoSchema)),
  });
