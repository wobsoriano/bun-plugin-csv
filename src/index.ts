import type { BunPlugin } from 'bun';
import { csvParse, tsvParse } from 'd3-dsv';

const parsers = { csv: csvParse, tsv: tsvParse };

export default function csvPlugin() {
  return {
    name: 'bun-plugin-csv',
    setup({ onLoad }) {
      onLoad({ filter: /\.(csv|tsv)$/ }, async (args) => {
        const file = Bun.file(args.path)
        const contents = await file.text()

        const ext = args.path.split('.').pop()
        const rows = parsers[ext as keyof typeof parsers](contents);

        return {
          contents: `export default ${JSON.stringify(rows)}`,
          loader: 'js',
        }
      })
    }
  } satisfies BunPlugin
}
