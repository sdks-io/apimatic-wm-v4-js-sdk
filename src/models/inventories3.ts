import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { node10Schema, type Node10 } from "./node10.js";

/** <strong style="color: green;">Market availability: Global</strong> */
export type Inventories3 = {
  nodes: Node10[];
};

export const inventories3Schema: Schema<Inventories3> = s.object<Inventories3>({
  nodes: s.array(s.lazy(() => node10Schema)),
});
