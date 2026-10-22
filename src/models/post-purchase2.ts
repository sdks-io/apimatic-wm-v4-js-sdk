import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cancellations5Schema, type Cancellations5 } from "./cancellations5.js";
import { otd2Schema, type Otd2 } from "./otd2.js";

/** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
export type PostPurchase2 = {
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  cancellations?: Cancellations5;
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  returns?: Record<string, unknown>;
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  issueCount?: string;
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  otd?: Otd2;
};

export const postPurchase2Schema: Schema<PostPurchase2> = s.object<PostPurchase2>({
  cancellations: s.optional(s.lazy(() => cancellations5Schema)),
  returns: s.optional(s.record(s.string(), s.unknown())),
  issueCount: s.optional(s.string()),
  otd: s.optional(s.lazy(() => otd2Schema)),
});
