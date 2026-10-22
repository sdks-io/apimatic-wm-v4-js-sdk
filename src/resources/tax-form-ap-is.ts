import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  v1SettingsDownloadtaxformprofile400Error1Schema,
  type V1SettingsDownloadtaxformprofile400Error1,
} from "../models/v1-settings-downloadtaxformprofile400-error1.js";
import {
  v1SettingsDownloadtaxformprofile404Error1Schema,
  type V1SettingsDownloadtaxformprofile404Error1,
} from "../models/v1-settings-downloadtaxformprofile404-error1.js";
import {
  v1SettingsDownloadtaxformprofile500Error1Schema,
  type V1SettingsDownloadtaxformprofile500Error1,
} from "../models/v1-settings-downloadtaxformprofile500-error1.js";
import {
  v1SettingsDownloadtaxformprofile502Error1Schema,
  type V1SettingsDownloadtaxformprofile502Error1,
} from "../models/v1-settings-downloadtaxformprofile502-error1.js";
import {
  v1SettingsGettaxformprofileResponseSchema,
  type V1SettingsGettaxformprofileResponse,
} from "../models/v1-settings-gettaxformprofile-response.js";
import {
  v1SettingsGettaxformprofile400Error1Schema,
  type V1SettingsGettaxformprofile400Error1,
} from "../models/v1-settings-gettaxformprofile400-error1.js";
import {
  v1SettingsGettaxformprofile404Error1Schema,
  type V1SettingsGettaxformprofile404Error1,
} from "../models/v1-settings-gettaxformprofile404-error1.js";
import {
  v1SettingsGettaxformprofile500Error1Schema,
  type V1SettingsGettaxformprofile500Error1,
} from "../models/v1-settings-gettaxformprofile500-error1.js";
import { wmGlobalVersionSchema, type WmGlobalVersion } from "../models/wm-global-version.js";
import type { Servers } from "../servers.js";

export class TaxFormApIs {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Download Tax Form
   *
   * @remarks
   * The Download Tax Form API downloads the selected tax form document as a byte stream.
   *
   * <b style='color:green;'>Market availability: US only</b>
   *
   * @returns Tax form bytes returned.
   *
   * @throws {@link TaxFormApIs.DownloadTaxFormError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  downloadTaxForm(
    request: TaxFormApIs.DownloadTaxFormRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, TaxFormApIs.DownloadTaxFormError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/settings/downloadtaxformprofile"),
        auth: this.#auth.accessToken,
        pathParams: [],
        query: [
          { name: "payoutYear", value: request.payoutYear, schema: s.string() },
          { name: "taxFormType", value: request.taxFormType, schema: s.string() },
          { name: "formId", value: request.formId, schema: s.string() },
        ],
        headers: [
          { name: "WM_SEC.ACCESS_TOKEN", value: request.wmSecAccessToken, schema: s.string() },
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          { name: "WM_GLOBAL_VERSION", value: request.wmGlobalVersion, schema: wmGlobalVersionSchema },
          { name: "WM_MARKET", value: request.wmMarket, schema: s.string() },
          { name: "WM_PARTNER_ID", value: request.wmPartnerId, schema: s.string() },
          { name: "WM.TENANT_ID", value: request.wmTenantId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: TaxFormApIs.DownloadTaxFormError,
      },
      options,
    );
  }

  /**
   * Get Tax Forms
   *
   * @remarks
   * The Get Tax Forms API returns available tax forms for the authenticated seller, including form
   * type and form ID. The response is a JSON object containing tax form metadata.
   *
   * <b style='color:green;'>Market availability: US only</b>
   *
   * @returns Tax forms retrieved successfully.
   *
   * @throws {@link TaxFormApIs.GetTaxFormsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTaxForms(
    request: TaxFormApIs.GetTaxFormsRequest,
    options?: RequestOptions,
  ): ApiPromise<V1SettingsGettaxformprofileResponse, TaxFormApIs.GetTaxFormsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/settings/gettaxformprofile"),
        auth: this.#auth.accessToken,
        pathParams: [],
        query: [],
        headers: [
          { name: "WM_SEC.ACCESS_TOKEN", value: request.wmSecAccessToken, schema: s.string() },
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          { name: "WM_GLOBAL_VERSION", value: request.wmGlobalVersion, schema: wmGlobalVersionSchema },
          { name: "WM_MARKET", value: request.wmMarket, schema: s.string() },
          { name: "WM_PARTNER_ID", value: request.wmPartnerId, schema: s.string() },
          { name: "WM.TENANT_ID", value: request.wmTenantId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1SettingsGettaxformprofileResponseSchema },
        errorFactory: TaxFormApIs.GetTaxFormsError,
      },
      options,
    );
  }
}

export namespace TaxFormApIs {
  export type DownloadTaxFormRequest = {
    /**
     * The tax year associated with the payout (for example, 2024). <br><b
     * style='color:green;'>Market availability: US only</b>
     */
    payoutYear: string;
    /**
     * The tax form type to download (for example, 1099-K).<br><b style='color:green;'>Market
     * availability: US only</b>
     */
    taxFormType: string;
    /**
     * The unique form ID returned by the list tax forms endpoint.<br><b style='color:green;'>Market
     * availability: US only</b>
     */
    formId: string;
    /**
     * Access token obtained from the Token API. This is required for authenticating requests to
     * Walmart Marketplace APIs.<br><b style='color:green;'>Market availability: Global</b>
     */
    wmSecAccessToken: string;
    /**
     * A unique ID that identifies each API call and is used to track and debug issues. Use a
     * randomly generated GUID for this ID. <br><b style='color:green;'>Market availability:
     * Global</b>
     */
    wmQosCorrelationId: string;
    /**
     * Specifies the name of the Walmart service being called. <br><b style='color:green;'>Market
     * availability: Global</b>
     */
    wmSvcName: string;
    /**
     * The version of the global API used. <strong style="color: green;">Market availability:
     * Global</strong>
     */
    wmGlobalVersion: WmGlobalVersion;
    /**
     * Identifies the Walmart Marketplace region for the request. If not specified, US is used by
     * default. <br><b style='color:green;'>Market availability: Global</b>
     */
    wmMarket: string;
    /**
     * The partner (seller) identifier registered in Walmart Marketplace. <br><b
     * style='color:green;'>Market availability: Global</b>
     */
    wmPartnerId: string;
    /**
     * Specifies the tenant identifier. <br><b style='color:green;'>Market availability: Global</b>
     */
    wmTenantId: string;
  };

  export class DownloadTaxFormError extends ApiError {
    declare readonly payload:
      | Declared<"v1SettingsDownloadtaxformprofile502Error1", V1SettingsDownloadtaxformprofile502Error1>
      | Declared<"v1SettingsDownloadtaxformprofile404Error1", V1SettingsDownloadtaxformprofile404Error1>
      | Declared<"v1SettingsDownloadtaxformprofile400Error1", V1SettingsDownloadtaxformprofile400Error1>
      | Declared<"v1SettingsDownloadtaxformprofile500Error1", V1SettingsDownloadtaxformprofile500Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<DownloadTaxFormError> = [
      {
        on: 502,
        kind: "v1SettingsDownloadtaxformprofile502Error1",
        decode: { kind: "json", schema: v1SettingsDownloadtaxformprofile502Error1Schema },
      },
      {
        on: 404,
        kind: "v1SettingsDownloadtaxformprofile404Error1",
        decode: { kind: "json", schema: v1SettingsDownloadtaxformprofile404Error1Schema },
      },
      {
        on: 400,
        kind: "v1SettingsDownloadtaxformprofile400Error1",
        decode: { kind: "json", schema: v1SettingsDownloadtaxformprofile400Error1Schema },
      },
      {
        on: 500,
        kind: "v1SettingsDownloadtaxformprofile500Error1",
        decode: { kind: "json", schema: v1SettingsDownloadtaxformprofile500Error1Schema },
      },
    ];
  }

  export type GetTaxFormsRequest = {
    /**
     * Access token obtained from the Token API. This is required for authenticating requests to
     * Walmart Marketplace APIs.<br><b style='color:green;'>Market availability: Global</b>
     */
    wmSecAccessToken: string;
    /**
     * A unique ID that identifies each API call and is used to track and debug issues. Use a
     * randomly generated GUID for this ID. <br><b style='color:green;'>Market availability:
     * Global</b>
     */
    wmQosCorrelationId: string;
    /**
     * Specifies the name of the Walmart service being called. <br><b style='color:green;'>Market
     * availability: Global</b>
     */
    wmSvcName: string;
    /**
     * The version of the global API used. <strong style="color: green;">Market availability:
     * Global</strong>
     */
    wmGlobalVersion: WmGlobalVersion;
    /**
     * Identifies the Walmart Marketplace region for the request. If not specified, US is used by
     * default. <br><b style='color:green;'>Market availability: Global</b>
     */
    wmMarket: string;
    /**
     * The partner (seller) identifier registered in Walmart Marketplace. <br><b
     * style='color:green;'>Market availability: Global</b>
     */
    wmPartnerId: string;
    /**
     * Specifies the tenant identifier for multi-tenant contexts. <br><b style='color:green;'>Market
     * availability: Global</b>
     */
    wmTenantId: string;
  };

  export class GetTaxFormsError extends ApiError {
    declare readonly payload:
      | Declared<"v1SettingsGettaxformprofile404Error1", V1SettingsGettaxformprofile404Error1>
      | Declared<"v1SettingsGettaxformprofile400Error1", V1SettingsGettaxformprofile400Error1>
      | Declared<"v1SettingsGettaxformprofile500Error1", V1SettingsGettaxformprofile500Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetTaxFormsError> = [
      {
        on: 404,
        kind: "v1SettingsGettaxformprofile404Error1",
        decode: { kind: "json", schema: v1SettingsGettaxformprofile404Error1Schema },
      },
      {
        on: 400,
        kind: "v1SettingsGettaxformprofile400Error1",
        decode: { kind: "json", schema: v1SettingsGettaxformprofile400Error1Schema },
      },
      {
        on: 500,
        kind: "v1SettingsGettaxformprofile500Error1",
        decode: { kind: "json", schema: v1SettingsGettaxformprofile500Error1Schema },
      },
    ];
  }
}
