# bun-plugin-csv

A Bun plugin which converts `.csv` and `.tsv` files into JavaScript modules.

## Install

```bash
bun add bun-plugin-csv -d
```

## Bundler Usage

```ts
import csv from 'bun-plugin-csv'

await Bun.build({
  entrypoints: ['./src/index.ts'],
  // other config

  plugins: [csv()]
})
```

Suppose that you have a CSV which contains some info:

```csv
type,count
apples,7
pears,4
bananas,5
```

The import will provide an `Array` of `Objects` representing rows from the CSV file:

```ts
import fruit from './fruit.csv';

console.log(fruit);
// [
//   { type: 'apples', count: '7' },
//   { type: 'pears', count: '4' },
//   { type: 'bananas', count: '5' }
// ]
```

## Runtime usage

To use as a runtime plugin, create a file that registers the plugin:

```ts
import csv from 'bun-plugin-csv'

Bun.plugin(csv())
```

Then preload it in your `bunfig.toml`:

```toml
preload = ['./csv.ts']
```

## TypeScript Intellisense

Add the following to your `.d.ts` file:

```ts
/// <reference types="bun-plugin-csv/env" />
```

## License

MIT
