import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { inventory3Schema, type Inventory3 } from "./inventory3.js";

export type Payload21 = {
  inventory?: Inventory3[];
};

export const payload21Schema: Schema<Payload21> = s.object<Payload21>({
  inventory: s.optional(s.array(s.lazy(() => inventory3Schema))),
});
