// @deno-types='@x/esbuild@v0.19.6/mod.d.ts'
import { build, stop } from '@x/esbuild@v0.19.6/mod.js'
import { denoPlugins } from '@x/esbuild_deno_loader@0.8.2/mod.ts'

const promises = []
for await (const dirEntry of Deno.readDir('./static/ts/'))
	if (dirEntry.isFile && dirEntry.name.endsWith('.ts'))
		promises.push(esbuild('./static/ts/' + dirEntry.name, './static/js/' + dirEntry.name.slice(0, -2) + 'js'))
await Promise.allSettled(promises)

stop()
console.log(performance.now().toLocaleString('en-US', { maximumFractionDigits: 2 }) + 'ms')

async function esbuild(inPath: string, outPath: string): Promise<void> {
	console.log('   ' + inPath + '\n=> ' + outPath)
	const { errors, warnings } = await build({
		plugins: denoPlugins(),
		entryPoints: [ inPath ],
		outfile: outPath,
		format: 'esm',
		bundle: true,
		minify: true
	})
	errors.forEach(x => console.error(x))
	warnings.forEach(x => console.warn(x))
}
