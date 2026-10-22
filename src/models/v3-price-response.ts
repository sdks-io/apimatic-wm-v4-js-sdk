import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { itemDetails6Schema, type ItemDetails6 } from "./item-details6.js";

export type V3PriceResponse = {
  /** <br><b style='color:green;'>Market availability: CA | MX | CL</b> */
  feedStatus: string;
  /** <br><b style='color:green;'>Market availability: CA | MX | CL</b> */
  feedSubmissionDate: number;
  /** <br><b style='color:green;'>Market availability: CA | MX | CL</b> */
  itemsReceived: number;
  /** <br><b style='color:green;'>Market availability: CA | MX | CL</b> */
  itemsSucceeded: number;
  /** <br><b style='color:green;'>Market availability: CA | MX | CL</b> */
  itemsFailed: number;
  /** <br><b style='color:green;'>Market availability: CA | MX | CL</b> */
  itemsProcessing: number;
  /** <br><b style='color:green;'>Market availability: CA | MX | CL</b> */
  itemDetails: ItemDetails6;
};

export const v3PriceResponseSchema: Schema<V3PriceResponse> = s.object<V3PriceResponse>({
  feedStatus: s.string(),
  feedSubmissionDate: s.int(),
  itemsReceived: s.int(),
  itemsSucceeded: s.int(),
  itemsFailed: s.int(),
  itemsProcessing: s.int(),
  itemDetails: itemDetails6Schema,
});
