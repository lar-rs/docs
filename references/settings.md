# Settings

## Get the index settings

<RouteHighlighter method="GET" route="/indexes/:uid/settings" />

Get the index settings.


#### Path Variables

| Variable          | Description           |
|-------------------|-----------------------|
| **index**         | The index name        |


### Example

```bash
curl \
  --request GET 'http://localhost:7700/indexes/12345678/settings'
```


#### Response: `200 Ok`

List the settings.

```json
{
  "rankingOrder": [
    "_sum_of_typos",
    "_number_of_words",
    "_word_proximity",
    "_sum_of_words_attribute",
    "_sum_of_words_position",
    "_exact",
    "release_date"
  ],
  "distinctField": "",
  "rankingRules": {
    "release_date": "dsc"
  }
}
```

## Add or update settings

<RouteHighlighter method="POST" route="/indexes/:uid/settings" />

Add or update the following settings :
* Create [custom ranking rules](/advanced_guides/ranking.md#custom-ranking-rules)
* Change [ranking rules order](/advanced_guides/ranking.md#ranking-order)
* Create distinct field


#### Path Variables

| Variable          | Description           |
|-------------------|-----------------------|
| **index**         | The index name        |

#### Body

| Variable          | Description           |
|-------------------|-----------------------|
| **rankingRules**         | All [custom ranking rules](/advanced_guides/ranking.md#custom-ranking-rules)      |
| **rankingOrder**         | [Ranking order](/advanced_guides/ranking.md#ranking-order) of all rules, custom and default     |
| **distinct**         | Field to which [distinct](/advanced_guides/distinct.md) will be applied    |

#### Ranking rules

An objet containing document attributes as keys and  `asc` ascending or `dsc` descending as value of this key. More information about [custom ranking rules](/advanced_guides/ranking.md#custom-ranking-rules).

#### Ranking order

A list of ranking rules ordered by importance for the [bucket sort](/advanced_guides/bucket_sort). The first rule being the most important.

#### Distinct

A string containing the attribute that needs to be [distinct](/advanced_guides/distinct).

::: warning
None of the 3 settings parameters is mandatory
:::

### Example

```bash
curl \
  --request GET 'http://localhost:7700/indexes/12345678/settings' \
  --data '{
  "rankingOrder": [
    "_sum_of_typos",
    "_number_of_words",
    "_word_proximity",
    "_sum_of_words_attribute",
    "_sum_of_words_position",
    "_exact",
    "release_date"
  ],
  "distinctField": "",
  "rankingRules": {
    "release_date": "dsc"
  }
}'
```


#### Response: `202 Accepted`

```json
{
  "updateId": 1
}
```
This [update id allows you to track](/references/updates) the current action.
