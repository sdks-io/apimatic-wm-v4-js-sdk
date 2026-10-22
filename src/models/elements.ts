import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { getAllInventoriesDtoSchema, type GetAllInventoriesDto } from "./get-all-inventories-dto.js";

export type Elements = {
  inventories?: GetAllInventoriesDto[];
};

export const elementsSchema: Schema<Elements> = s.object<Elements>({
  inventories: s.optional(s.array(s.lazy(() => getAllInventoriesDtoSchema))),
});
