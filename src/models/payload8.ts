import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { inventoryWfsSchema, type InventoryWfs } from "./inventory-wfs.js";

export type Payload8 = {
  inventory?: InventoryWfs[];
};

export const payload8Schema: Schema<Payload8> = s.object<Payload8>({
  inventory: s.optional(s.array(s.lazy(() => inventoryWfsSchema))),
});
