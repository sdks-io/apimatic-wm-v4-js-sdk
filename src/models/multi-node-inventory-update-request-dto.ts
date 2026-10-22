import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  updateInventoriesRequestDtoSchema,
  type UpdateInventoriesRequestDto,
} from "./update-inventories-request-dto.js";

export type MultiNodeInventoryUpdateRequestDto = {
  inventories: UpdateInventoriesRequestDto;
};

export const multiNodeInventoryUpdateRequestDtoSchema: Schema<MultiNodeInventoryUpdateRequestDto> =
  s.object<MultiNodeInventoryUpdateRequestDto>({
    inventories: updateInventoriesRequestDtoSchema,
  });
