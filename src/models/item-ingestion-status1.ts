import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ItemIngestionStatus1 = {
  /** <br><b style='color:green;'>Market availability: CA | MX | CL</b> */
  martId: number;
  /** <br><b style='color:green;'>Market availability: CA | MX | CL</b> */
  sku: string;
  /** <br><b style='color:green;'>Market availability: CA | MX | CL</b> */
  ingestionStatus: string;
};

export const itemIngestionStatus1Schema: Schema<ItemIngestionStatus1> = s.object<ItemIngestionStatus1>({
  martId: s.int(),
  sku: s.string(),
  ingestionStatus: s.string(),
});
