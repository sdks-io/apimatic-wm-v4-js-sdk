import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  simplifiedAccountShippingSettingsDtoSchema,
  type SimplifiedAccountShippingSettingsDto,
} from "./simplified-account-shipping-settings-dto.js";

export type CreateSimplifiedShippingSettingsRequest = {
  /** Simplified Shipping Settings */
  simplifiedShippingSettings?: SimplifiedAccountShippingSettingsDto;
};

export const createSimplifiedShippingSettingsRequestSchema: Schema<CreateSimplifiedShippingSettingsRequest> =
  s.object<CreateSimplifiedShippingSettingsRequest>({
    simplifiedShippingSettings: s.optional(s.lazy(() => simplifiedAccountShippingSettingsDtoSchema)),
  });
