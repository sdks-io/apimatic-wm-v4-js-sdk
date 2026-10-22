import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { stateDtoSchema, type StateDto } from "./state-dto.js";

/** Sub region configurations to which shipping has to be covered with added carriers. */
export type SubRegionDto = {
  /** Sub region code for covered shipping. */
  subRegionCode?: string;
  /** Sub region name for covered shipping. */
  subRegionName?: string;
  /**
   * State configuration to which shipping has to be covered with added carriers as part of
   * mentioned sub region area.
   */
  states?: StateDto[];
};

export const subRegionDtoSchema: Schema<SubRegionDto> = s.object<SubRegionDto>({
  subRegionCode: s.optional(s.string()),
  subRegionName: s.optional(s.string()),
  states: s.optional(s.array(s.lazy(() => stateDtoSchema))),
});
