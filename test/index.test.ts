import { expect, test } from 'bun:test'
import csv from '../src'

test('import and extract csv', async () => {
  Bun.plugin(csv())

  const { default: mod } = await import('./fruits.csv')
  expect(mod).toMatchObject([
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
