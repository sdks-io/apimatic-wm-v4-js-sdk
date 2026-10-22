import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  partnerProgramStatementDoSchema,
  type PartnerProgramStatementDo,
} from "./partner-program-statement-do.js";

export type PartnerProgramStatementRes = {
  statusCode?: number;
  status?: string;
  error?: string;
  partnerId?: string;
  payload?: PartnerProgramStatementDo;
};

export const partnerProgramStatementResSchema: Schema<PartnerProgramStatementRes> =
  s.object<PartnerProgramStatementRes>({
    statusCode: s.optional(s.int()),
    status: s.optional(s.string()),
    error: s.optional(s.string()),
    partnerId: s.optional(s.string()),
    payload: s.optional(s.lazy(() => partnerProgramStatementDoSchema)),
  });
