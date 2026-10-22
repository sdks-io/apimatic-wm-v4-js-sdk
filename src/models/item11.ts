import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { strategy5Schema, type Strategy5 } from "./strategy5.js";

/** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
export type Item11 = {
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  strategy?: Strategy5;
};

export const item11Schema: Schema<Item11> = s.object<Item11>({
  strategy: s.optional(s.lazy(() => strategy5Schema)),
  _keysMap: {
    strategy: "Strategy",
  },
});
