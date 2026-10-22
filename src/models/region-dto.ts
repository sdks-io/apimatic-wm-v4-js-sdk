import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { subRegionDtoSchema, type SubRegionDto } from "./sub-region-dto.js";

/** Region configurations to which shipping has to be covered with added carriers. */
export type RegionDto = {
  /** Region code for covered shipping. */
  regionCode?: string;
  /** Region name for covered shipping. */
  regionName?: string;
  /** Sub region configurations to which shipping has to be covered with added carriers. */
  subRegions?: SubRegionDto[];
};

export const regionDtoSchema: Schema<RegionDto> = s.object<RegionDto>({
  regionCode: s.optional(s.string()),
  regionName: s.optional(s.string()),
  subRegions: s.optional(s.array(s.lazy(() => subRegionDtoSchema))),
});
