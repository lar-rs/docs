# Updates

## Get an update status

<RouteHighlighter method="GET" route="/indexes/:uid/updates/:update-id"/>

Get the status of an [update](/advanced_guides/asynchronous_updates.md) in a given [index](/main_concepts/indexes.md).


#### Path Variables

| Variable      | Description           |
|---------------|-----------------------|
| **index**     | The index UID |
| **update-id** | An update identifier  |

### Example

```bash
curl \
  --request GET 'http://localhost:7700/indexes/12345678/updates/3'
```

#### Response: `200 Ok`

Here is an example response of an update that has been processed.

```json
{
  "status": "enqueued",
  "update_id": 3,
  "update_type": {
    "name": "DocumentsAddition",
    "number": 19652
  },
  "enqueued_at": "2019-11-13T14:51:22.857056Z"
}
```

## Get all update status

<RouteHighlighter method="GET" route="/indexes/:uid/updates"/>

Get the status of all [updates](/advanced_guides/asynchronous_updates.md) in a given [index](/main_concepts/indexes.md).


#### Path Variables

| Variable      | Description           |
|---------------|-----------------------|
| **index**     | The index UID |
| **update-id** | An update identifier  |

### Example

```bash
curl \
  --request GET 'http://localhost:7700/indexes/12345678/updates'
```

#### Response: `200 Ok`

Here is an example response of an update that have been processed.

```json
{
  "status": "enqueued",
  "update_id": 3,
  "update_type": {
    "name": "DocumentsAddition",
    "number": 19652
  },
  "enqueued_at": "2019-11-13T14:51:22.857056Z"
}
```
