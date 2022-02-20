#!/usr/bin/env node
import * as fs from 'fs'
import consola from 'consola'
import minimist from 'minimist'
import { getDataFromFile, isDirectoryExists, isFileExists } from './utils'
import { convert } from './convert'
import path from 'path'
const argv = minimist<Arguments>(process.argv.slice(2))

interface Arguments {
	from: string;
	to: string;
}

export const init = (args: Arguments, callback: (from: string, to: string) => void): void => {
	if (!args.from) {
		consola.error('You need to pass from')
	}
	if (!args.to) {
		consola.error('You need to pass to')
	}
	if (args.from && args.to) {
		if (isFileExists(args.from) && isDirectoryExists(args.to)) {
			callback(args.from, args.to)
		}
	}
}

init(argv, (from, to) => {
	try {
		const newJson = JSON.stringify(convert(getDataFromFile(from)), null, 4)
		fs.writeFileSync(to + '/result.json', newJson)
		consola.success('conversion was successful')
		consola.success(`the converted file is in ${ path.join(to, '/result.json') }`)
	} catch (e) {
		consola.error(e)
	}
})
