import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { shipOrderLineSchema, type ShipOrderLine } from "./ship-order-line.js";

export type ShipOrderLinesRequest = {
  orderLines: ShipOrderLine[];
};

export const shipOrderLinesRequestSchema: Schema<ShipOrderLinesRequest> = s.object<ShipOrderLinesRequest>({
  orderLines: s.array(s.lazy(() => shipOrderLineSchema)),
});
