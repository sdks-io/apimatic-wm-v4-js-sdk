import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { meta12Schema, type Meta12 } from "./meta12.js";
import { returnOrder1Schema, type ReturnOrder1 } from "./return-order1.js";

export type ReturnOrdersResponses = {
  /** Meta data about the list.<br><b style='color:green;'>Market availability: MX</b> */
  meta?: Meta12;
  /** returnOrders.<br><b style='color:green;'>Market availability: MX</b> */
  returnOrders?: ReturnOrder1[];
};

export const returnOrdersResponsesSchema: Schema<ReturnOrdersResponses> = s.object<ReturnOrdersResponses>({
  meta: s.optional(s.lazy(() => meta12Schema)),
  returnOrders: s.optional(s.array(s.lazy(() => returnOrder1Schema))),
});
