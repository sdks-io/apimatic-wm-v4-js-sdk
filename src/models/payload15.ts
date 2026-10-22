import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { replenishmentSchema, type Replenishment } from "./replenishment.js";

export type Payload15 = {
  replenishments?: Replenishment[];
};

export const payload15Schema: Schema<Payload15> = s.object<Payload15>({
  replenishments: s.optional(s.array(s.lazy(() => replenishmentSchema))),
});
