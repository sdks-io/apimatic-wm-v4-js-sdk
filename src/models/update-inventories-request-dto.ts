import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  updateInventoriesRequestNodeDtoSchema,
  type UpdateInventoriesRequestNodeDto,
} from "./update-inventories-request-node-dto.js";

export type UpdateInventoriesRequestDto = {
  nodes: UpdateInventoriesRequestNodeDto[];
};

export const updateInventoriesRequestDtoSchema: Schema<UpdateInventoriesRequestDto> =
  s.object<UpdateInventoriesRequestDto>({
    nodes: s.array(s.lazy(() => updateInventoriesRequestNodeDtoSchema)),
  });
