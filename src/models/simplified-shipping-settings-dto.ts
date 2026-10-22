import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fcConfigDtoSchema, type FcConfigDto } from "./fc-config-dto.js";
import {
  simplifiedAccountConfigForGetDtoSchema,
  type SimplifiedAccountConfigForGetDto,
} from "./simplified-account-config-for-get-dto.js";

/** Simplified Shipping Settings */
export type SimplifiedShippingSettingsDto = {
  /**
   * Account configuration to be set for a seller, comprising of Carrier configurations and Region
   * configurations.
   */
  accountConfigs?: SimplifiedAccountConfigForGetDto;
  /** Comprises a list of all fulfillment center IDs along with their respective configurations. */
  shipNodeConfigs?: FcConfigDto[];
};

export const simplifiedShippingSettingsDtoSchema: Schema<SimplifiedShippingSettingsDto> =
  s.object<SimplifiedShippingSettingsDto>({
    accountConfigs: s.optional(s.lazy(() => simplifiedAccountConfigForGetDtoSchema)),
    shipNodeConfigs: s.optional(s.array(s.lazy(() => fcConfigDtoSchema))),
  });
