import './plugin'

import { expect, test } from 'bun:test'

test('import and extract csv', async () => {
  const result = await import('./fruits.csv').then((r) => r.default)
  expect(result).toMatchObject([
    {
      type: "apples",
      count: "7"
    }, {
      type: "pears",
      count: "4"
    }, {
      type: "bananas",
      count: "5"
    }
  ])
})
