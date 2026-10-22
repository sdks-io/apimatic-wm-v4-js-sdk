import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { itemIngestionStatus1Schema, type ItemIngestionStatus1 } from "./item-ingestion-status1.js";

/** <br><b style='color:green;'>Market availability: CA | MX | CL</b> */
export type ItemDetails6 = {
  /** <br><b style='color:green;'>Market availability: CA | MX | CL</b> */
  itemIngestionStatus: ItemIngestionStatus1[];
};

export const itemDetails6Schema: Schema<ItemDetails6> = s.object<ItemDetails6>({
  itemIngestionStatus: s.array(s.lazy(() => itemIngestionStatus1Schema)),
});
