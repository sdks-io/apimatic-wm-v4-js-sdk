import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  simplifiedAccountConfigForUpdateDtoSchema,
  type SimplifiedAccountConfigForUpdateDto,
} from "./simplified-account-config-for-update-dto.js";

/** Simplified Shipping Settings */
export type SimplifiedAccountShippingSettingsForUpdateDto = {
  /**
   * Account configuration to be set for a seller, comprising of Carrier configurations and Region
   * configurations.
   */
  accountConfigs?: SimplifiedAccountConfigForUpdateDto;
};

export const simplifiedAccountShippingSettingsForUpdateDtoSchema: Schema<SimplifiedAccountShippingSettingsForUpdateDto> =
  s.object<SimplifiedAccountShippingSettingsForUpdateDto>({
    accountConfigs: s.optional(s.lazy(() => simplifiedAccountConfigForUpdateDtoSchema)),
  });
