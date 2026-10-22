import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * State configuration to which shipping has to be covered with added carriers as part of mentioned
 * sub region area.
 */
export type StateDto = {
  /** State code for covered shipping. */
  stateCode?: string;
  /** State name for covered shipping. */
  stateName?: string;
};

export const stateDtoSchema: Schema<StateDto> = s.object<StateDto>({
  stateCode: s.optional(s.string()),
  stateName: s.optional(s.string()),
});
