import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fcConfigDtoSchema, type FcConfigDto } from "./fc-config-dto.js";

/** Simplified Shipping Settings */
export type SimplifiedFcShippingSettingsDto = {
  /** Comprises a list of all fulfillment center IDs along with their respective configurations. */
  shipNodeConfigs?: FcConfigDto[];
};

export const simplifiedFcShippingSettingsDtoSchema: Schema<SimplifiedFcShippingSettingsDto> =
  s.object<SimplifiedFcShippingSettingsDto>({
    shipNodeConfigs: s.optional(s.array(s.lazy(() => fcConfigDtoSchema))),
  });
