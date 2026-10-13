import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { commonCurrencySchema, type CommonCurrency } from "./common-currency.js";

/** Freight information describes the SKUs that are in transit. */
export type CommonFreightInformation = {
  /** The type and amount of currency. */
  declaredValue?: CommonCurrency;
  /**
   * Freight class. Possible values: `NONE`, `FC_50`, `FC_55`, `FC_60`, `FC_65`, `FC_70`, `FC_77_5`,
   * `FC_85`, `FC_92_5`, `FC_100`, `FC_110`, `FC_125`, `FC_150`, `FC_175`, `FC_200`, `FC_250`,
   * `FC_300`, `FC_400`, `FC_500`.
   */
  freightClass?: string;
};

export const commonFreightInformationSchema: Schema<CommonFreightInformation> =
  s.object<CommonFreightInformation>({
    declaredValue: s.optional(s.lazy(() => commonCurrencySchema)),
    freightClass: s.optional(s.string()),
  });
