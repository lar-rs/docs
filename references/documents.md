# Documents

## Get one document

<RouteHighlighter method="GET" route="/indexes/:uid/documents/:identifier"/>

Get one document using its unique identifier.


#### Path Variables

| Variable          | Description           |
|-------------------|-----------------------|
| **index**         | The index UID |
| **identifier**    | [The unique identifier of the document](/main_concepts/indexes.md#identifier) |

### Example

```bash
curl \
  --request GET 'http://localhost:7700/indexes/12345678/documents/25684'
```

#### Response: `200 Ok`

```json
{
  "id": 25684,
  "title": "American Ninja 5",
  "poster": "https://image.tmdb.org/t/p/w1280/iuAQVI4mvjI83wnirpD8GVNRVuY.jpg",
  "overview": "When a scientists daughter is kidnapped, American Ninja, attempts to find her, but this time he teams up with a youngster he has trained in the ways of the ninja.",
  "release_date": "1993-01-01"
}
```





## Get all documents

<RouteHighlighter method="GET" route="/indexes/:uid/documents"/>

Get the documents in an unordered way.

::: danger
This route is a non-optimized route, it can be a little bit slow to answer.
:::


#### Path Variables

| Variable          | Description           |
|-------------------|-----------------------|
| **index**         | The index UID |

#### Query Parameters

| Query Parameter           | Description                          | Default Value |
|---------------------------|--------------------------------------|:-------------:|
| **offset**                | number of documents to skip          | 0             |
| **limit**                 | number of documents to take          | 20            |
| **attributesToRetrieve**  | document attributes to show          | *             |

### Example

```bash
curl \
  --request GET 'http://localhost:7700/indexes/12345678/documents?limit=2'
```

#### Response: `200 Ok`

```json
[
  {
    "id": 25684,
    "release_date": "1993-01-01",
    "poster": "https://image.tmdb.org/t/p/w1280/iuAQVI4mvjI83wnirpD8GVNRVuY.jpg","title": "American Ninja 5",
    "overview": "When a scientists daughter is kidnapped, American Ninja, attempts to find her, but this time he teams up with a youngster he has trained in the ways of the ninja."
  },
  {
    "id": 468219,
    "title": "Dead in a Week (Or Your Money Back)",
    "release_date": "2018-09-12",
    "poster": "https://image.tmdb.org/t/p/w1280/f4ANVEuEaGy2oP5M0Y2P1dwxUNn.jpg",
    "overview": "William has failed to kill himself so many times that he outsources his suicide to aging assassin Leslie. But with the contract signed and death assured within a week (or his money back), William suddenly discovers reasons to live... However Leslie is under pressure from his boss to make sure the contract is completed."
  }
]
```





## Add or Update documents

<RouteHighlighter method="POST" route="/indexes/:uid/documents"/>

Insert a list of documents or update them if they already exist based on [their unique identifiers](/main_concepts/indexes.md#schema-definition).

The update id returned by this function can be sent to the [get update status route](/references/updates.md#get-an-update-status) to retrieve informations about its advancement.


#### Path Variables

| Variable          | Description           |
|-------------------|-----------------------|
| **index**         | The index UID |

#### Body

The body is composed of a **Json array** of documents composed of fields corresponding to the index schema.
You can [read more about fields and schemas](/main_concepts/indexes.md#schema-definition).

::: warning
Documents fields which are not known to the index schema will be ignored
:::

```json
[
  {
    "id": 287947,
    "title": "Shazam",
    "poster": "https://image.tmdb.org/t/p/w1280/xnopI5Xtky18MPhK40cZAGAOVeV.jpg",
    "overview": "A boy is given the ability to become an adult superhero in times of need with a single magic word.",
    "release_date": "2019-03-23"
  }
]
```

### Example

```bash
curl \
  --request POST 'http://localhost:7700/indexes/12345678/documents' \
  --data '[{
      "id": 287947,
      "title": "Shazam",
      "poster": "https://image.tmdb.org/t/p/w1280/xnopI5Xtky18MPhK40cZAGAOVeV.jpg",
      "overview": "A boy is given the ability to become an adult superhero in times of need with a single magic word.",
      "release_date": "2019-03-23"
    }]'
```

#### Response: `202 Accepted`

```json
{
  "updateId": 1
}
```
This [update id allows you to track](/references/updates) the current action.

## Update documents

<RouteHighlighter method="PUT" route="/indexes/:uid/documents"/>

same as [Add or Update](/references/documents.md#add-or-update-documents)

## Clear all documents

<RouteHighlighter method="DELETE" route="/indexes/:uid/documents"/>

Delete all documents in the specified index.

The update id returned by this function can be sent to the [get update status route](/references/updates.md#get-an-update-status) to retrieve informations about its advancement.


#### Path Variables

| Variable  | Description           |
|-----------|-----------------------|
| **index** | The index UID |

### Example

```bash
curl \
  --request DELETE 'http://localhost:7700/indexes/12345678/documents'
```

#### Response: `202 Accepted`

```json
{
  "updateId": 1
}
```
This [update id allows you to track](/references/updates) the current action.




## Delete one document

<RouteHighlighter method="DELETE" route="/indexes/:uid/documents/:identifier"/>

Delete one document based on its unique identifier.<br/>
You can read more about [identifiers and schemas](/main_concepts/indexes.md#schema-definition).

The update id returned by this function can be sent to the [get update status route](/references/updates.md#get-an-update-status) to retrieve informations about its advancement.

#### Path Variables

| Variable  | Description           |
|-----------|-----------------------|
| **index** | The index UID |

### Example

```bash
  curl \
  --request DELETE 'http://localhost:7700/indexes/12345678/documents/25684'
```

#### Response: `202 Accepted`

```json
{
  "updateId": 1
}
```
This [update id allows you to track](/references/updates) the current action.




## Delete multiple documents

<RouteHighlighter method="POST" route="/indexes/:uid/documents/delete"/>

Delete a selection of documents based on array of identifiers.<br/>
You can read more about [identifiers and schemas](/main_concepts/indexes.md#schema-definition).

The update id returned by this function can be sent to the [get update status route](/references/updates.md#get-an-update-status) to retrieve informations about its advancement.


#### Path Variables

| Variable  | Description           |
|-----------|-----------------------|
| **index** | The index UID |

#### Body

The body must be a **Json Array** with the unique identifiers of the documents to delete.

```json
[23488, 153738, 437035, 363869]
```

### Example

```bash
  curl \
  --request POST 'http://localhost:7700/indexes/12345678' \
  --data '[
      23488,
      153738,
      437035,
      363869
    ]'
```

#### Response: `202 Accepted`

```json
{
  "updateId": 1
}
```
This [update id allows you to track](/references/updates) the current action.
