import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  simplifiedAccountShippingSettingsForUpdateDtoSchema,
  type SimplifiedAccountShippingSettingsForUpdateDto,
} from "./simplified-account-shipping-settings-for-update-dto.js";

export type UpdateSimplifiedShippingSettingsRequest = {
  /** Simplified Shipping Settings */
  simplifiedShippingSettings?: SimplifiedAccountShippingSettingsForUpdateDto;
};

export const updateSimplifiedShippingSettingsRequestSchema: Schema<UpdateSimplifiedShippingSettingsRequest> =
  s.object<UpdateSimplifiedShippingSettingsRequest>({
    simplifiedShippingSettings: s.optional(s.lazy(() => simplifiedAccountShippingSettingsForUpdateDtoSchema)),
  });
