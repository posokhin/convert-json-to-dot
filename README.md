# convert-json-to-dot

### Convert nested JSON object to dot notation

### Installation

```
npm i -g convert-json-to-dot
```

### Example

yourFile.json

```json
{
  "person": {
    "firstname": "Anton",
    "lastname": "Posokhin",
    "parents": {
      "father": "Yuri",
      "mother": "Tatyana"
    }
  }
}
```

```shell
convert-json-to-dot --from <path to yourFile.json> --to <destination path>
```

### Result

result.json

```json
{
  "person.firstname": "Anton",
  "person.lastname": "Posokhin",
  "person.parents.father": "Yuri",
  "person.parents.mother": "Tatyana"
}
```

### Thanks for using this package

#### if you need my help you can write to me at posohin7@gmail.com. You can also open bugs.
