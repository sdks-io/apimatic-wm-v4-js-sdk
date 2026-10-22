import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  simplifiedAccountConfigDtoSchema,
  type SimplifiedAccountConfigDto,
} from "./simplified-account-config-dto.js";

/** Simplified Shipping Settings */
export type SimplifiedAccountShippingSettingsDto = {
  /**
   * Account configuration to be set for a seller, comprising of Carrier configurations and Region
   * configurations.
   */
  accountConfigs?: SimplifiedAccountConfigDto;
};

export const simplifiedAccountShippingSettingsDtoSchema: Schema<SimplifiedAccountShippingSettingsDto> =
  s.object<SimplifiedAccountShippingSettingsDto>({
    accountConfigs: s.optional(s.lazy(() => simplifiedAccountConfigDtoSchema)),
  });
