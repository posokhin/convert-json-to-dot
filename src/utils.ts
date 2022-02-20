import fs from 'fs'
import path from 'path'
import consola from 'consola'

export const isFileExists = (p: string): boolean => {
	let isFileExist = false
	try	{
		isFileExist = fs.statSync(path.resolve(p)).isFile()
	} catch (e) {
		consola.error(e)
	}
	return isFileExist
}

export const isDirectoryExists = (p: string): boolean => {
	let result = false
	try {
		result = fs.existsSync(path.resolve(p))
	} catch (e) {
		consola.error(e)
	}
	return result
}

export const getDataFromFile = (p: string): string | null => {
	let data = null
	try {
		data = JSON.parse(fs.readFileSync(path.resolve(p), { encoding: 'utf-8' }))
	} catch (e) {
		consola.error(e)
	}
	return data
}
