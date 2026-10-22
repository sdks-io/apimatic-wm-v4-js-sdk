import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
export type Otd2 = {
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  defectedOrder?: number;
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  totalOrder?: number;
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  rate?: number;
};

export const otd2Schema: Schema<Otd2> = s.object<Otd2>({
  defectedOrder: s.optional(s.int()),
  totalOrder: s.optional(s.int()),
  rate: s.optional(s.int()),
});
