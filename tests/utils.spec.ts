import { isFileExists, isDirectoryExists, getDataFromFile } from '../src/utils'
import fs from 'fs'

describe('utils', () => {
	it('should return true if directory exists', () => {
		jest.spyOn(fs, 'existsSync').mockReturnValueOnce(true)
		expect(isDirectoryExists('test')).toBeTruthy()
		jest.restoreAllMocks()
	})

	it('should return false if directory doesn\'t exists', () => {
		expect(isDirectoryExists('test')).toBeFalsy()
	})

	it('should return data from file', () => {
		const obj = { a: 1 }
		jest.spyOn(fs, 'readFileSync').mockReturnValueOnce(JSON.stringify(obj))
		expect(getDataFromFile('test')).toEqual(obj)
		jest.restoreAllMocks()
	})

	it('should return null if file doesn\'t exists', () => {
		expect(getDataFromFile('test')).toEqual(null)
	})

	it('should return true if file exists', () => {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		jest.spyOn(fs, 'statSync').mockReturnValue({ isFile: () => true })
		expect(isFileExists('test')).toBeTruthy()
		jest.restoreAllMocks()
	})

	it('should return false if file doesn\'t exists', () => {
		expect(isFileExists('test')).toBeFalsy()
	})
})
