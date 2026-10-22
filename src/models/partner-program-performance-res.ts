import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  partnerProgramPerformanceSchema,
  type PartnerProgramPerformance,
} from "./partner-program-performance.js";

export type PartnerProgramPerformanceRes = {
  statusCode?: number;
  status?: string;
  error?: string;
  partnerId?: string;
  Day7?: PartnerProgramPerformance;
  Day14?: PartnerProgramPerformance;
  Day30?: PartnerProgramPerformance;
  Day60?: PartnerProgramPerformance;
  Day90?: PartnerProgramPerformance;
};

export const partnerProgramPerformanceResSchema: Schema<PartnerProgramPerformanceRes> =
  s.object<PartnerProgramPerformanceRes>({
    statusCode: s.optional(s.int()),
    status: s.optional(s.string()),
    error: s.optional(s.string()),
    partnerId: s.optional(s.string()),
    Day7: s.optional(s.lazy(() => partnerProgramPerformanceSchema)),
    Day14: s.optional(s.lazy(() => partnerProgramPerformanceSchema)),
    Day30: s.optional(s.lazy(() => partnerProgramPerformanceSchema)),
    Day60: s.optional(s.lazy(() => partnerProgramPerformanceSchema)),
    Day90: s.optional(s.lazy(() => partnerProgramPerformanceSchema)),
    _keysMap: {
      Day7: "7DAY",
      Day14: "14DAY",
      Day30: "30DAY",
      Day60: "60DAY",
      Day90: "90DAY",
    },
  });
