<!-- Generated file — do not edit; regenerated with the SDK. -->

# Uploads — operations

Accessor: `client.uploads` · Source: `src/resources/uploads.ts` · 1 operation · Request and error types: namespace `Uploads`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apimatic-wm-v4-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createUploadDestinationForResource

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createUploadDestinationForResource(request: Uploads.CreateUploadDestinationForResourceRequest, options?: RequestOptions): ApiPromise<CreateUploadDestinationResponse, Uploads.CreateUploadDestinationForResourceError>`
- **Wire**: `POST /uploads/v4/uploadDestinations/{resource}`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateUploadDestinationResponse`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `Uploads.CreateUploadDestinationForResourceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [429] `ErrorList` · `"errorList4"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Uploads.CreateUploadDestinationForResourceRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `resource` | `path` | — | `Resource` | yes |
| `contentType` | `query` | — | `ContentType1` | yes |
| `marketplaceIds` | `query` | — | `string[]` | yes |
| `contentMd5` | `header` | `contentMD5` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Resource` | `resourceSchema` | `src/models/resource.ts` |
| `ContentType1` | `contentType1Schema` | `src/models/content-type1.ts` |
| `CreateUploadDestinationResponse` | `createUploadDestinationResponseSchema` | `src/models/create-upload-destination-response.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

