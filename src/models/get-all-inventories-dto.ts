import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  getAllInventoriesNodeDtoSchema,
  type GetAllInventoriesNodeDto,
} from "./get-all-inventories-node-dto.js";

export type GetAllInventoriesDto = {
  /** An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. */
  sku?: string;
  nodes?: GetAllInventoriesNodeDto[];
};

export const getAllInventoriesDtoSchema: Schema<GetAllInventoriesDto> = s.object<GetAllInventoriesDto>({
  sku: s.optional(s.string()),
  nodes: s.optional(s.array(s.lazy(() => getAllInventoriesNodeDtoSchema))),
});
