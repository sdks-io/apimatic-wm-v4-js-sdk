import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { commonOperationProblemSchema, type CommonOperationProblem } from "./common-operation-problem.js";
import { commonOperationStatusSchema, type CommonOperationStatus } from "./common-operation-status.js";

/** GetInboundOperationStatus response. */
export type CommonInboundOperationStatus = {
  /** The name of the operation in the asynchronous API call. */
  operation: string;
  /** The operation ID returned by the asynchronous API call. */
  operationId: string;
  /** The problems in the processing of the asynchronous operation. */
  operationProblems: CommonOperationProblem[];
  /** The status of an operation. */
  operationStatus: CommonOperationStatus;
};

export const commonInboundOperationStatusSchema: Schema<CommonInboundOperationStatus> =
  s.object<CommonInboundOperationStatus>({
    operation: s.string(),
    operationId: s.string(),
    operationProblems: s.array(s.lazy(() => commonOperationProblemSchema)),
    operationStatus: commonOperationStatusSchema,
  });
