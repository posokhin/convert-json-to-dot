import { convert } from '../src/convert'

describe('jsonToDot', () => {
	it('should return should return correct object', () => {
		const obj = {
			a: {
				b: {
					c: 1
				}
			}
		}

		expect(convert(obj)).toEqual({ 'a.b.c': 1 })
	})

	it('should return should return correct object', () => {
		const obj = {
			a: {
				b: {
					c: 'some'
				}
			},
			d: {
				e: {
					f: 2,
					g: null,
					h: true,
					i: false,
				}
			}
		}

		const resultObj = {
			'a.b.c': 'some',
			'd.e.f': 2,
			'd.e.g': null,
			'd.e.h': true,
			'd.e.i': false
		}

		expect(convert(obj)).toEqual(resultObj)
	})

	it('should return correct object', () => {
		const obj = {
			person: {
				firstname: 'Anton',
				lastname: 'Posokhin',
				parents: {
					father: 'Yuri',
					mother: 'Tatyana'
				}
			}
		}

		const resultObj = {
			'person.firstname': 'Anton',
			'person.lastname': 'Posokhin',
			'person.parents.father': 'Yuri',
			'person.parents.mother': 'Tatyana'
		}

		expect(convert(obj)).toEqual(resultObj)
	})

	it('should return {}', () => {
		expect(convert({})).toEqual({})
		expect(convert(null)).toEqual({})
		expect(convert(undefined)).toEqual({})
	})
})
