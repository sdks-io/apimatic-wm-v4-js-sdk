<!-- Generated file — do not edit; regenerated with the SDK. -->

# ProductTypeDefinitions — operations

Accessor: `client.productTypeDefinitions` · Source: `src/resources/product-type-definitions.ts` · 2 operations · Request and error types: namespace `ProductTypeDefinitions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apimatic-wm-v4-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getDefinitionsProductType

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getDefinitionsProductType(request: ProductTypeDefinitions.GetDefinitionsProductTypeRequest, options?: RequestOptions): ApiPromise<ProductTypeDefinition, ProductTypeDefinitions.GetDefinitionsProductTypeError>`
- **Wire**: `GET /definitions/v4/productTypes/{productType}`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ProductTypeDefinition`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `ProductTypeDefinitions.GetDefinitionsProductTypeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [404] `ErrorList` · `"errorList4"` [429] `ErrorList` · `"errorList5"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ProductTypeDefinitions.GetDefinitionsProductTypeRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `productType` | `path` | `string` | yes | — |
| `sellerId` | `query` | `string` | no | — |
| `locale` | `query` | `string` | no | `"en_US"` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProductTypeDefinition` | `productTypeDefinitionSchema` | `src/models/product-type-definition.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

### searchDefinitionsProductTypes

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `searchDefinitionsProductTypes(request: ProductTypeDefinitions.SearchDefinitionsProductTypesRequest, options?: RequestOptions): ApiPromise<ProductTypeList, ProductTypeDefinitions.SearchDefinitionsProductTypesError>`
- **Wire**: `GET /definitions/v4/productTypes`
- **Auth**: `walletAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ProductTypeList`
- **Error**: `WalmartApIsError` with `kind: "api"`, an instance of `ProductTypeDefinitions.SearchDefinitionsProductTypesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorList"` [400] `ErrorList` · `"errorList2"` [403] `ErrorList` · `"errorList3"` [429] `ErrorList` · `"errorList4"` [500] `ErrorList` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ProductTypeDefinitions.SearchDefinitionsProductTypesRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `keywords` | `query` | `string` | no | — |
| `itemName` | `query` | `string` | no | — |
| `locale` | `query` | `string` | no | `"en_US"` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProductTypeList` | `productTypeListSchema` | `src/models/product-type-list.ts` |
| `ErrorList` | `errorListSchema` | `src/models/error-list.ts` |

