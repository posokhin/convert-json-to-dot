type Obj = { [k: string]: any }

export function convert ( object: Obj | any, target: Obj = {}, prefix = ''): Obj {
	if (object !== null && object !== undefined) {
		const keys = Object.keys(object)
		if (keys.length > 0) {
			keys.forEach((key) => {
				if (typeof object[key] === 'object' && typeof object[key] !== null) {
					convert(object[key], target, (prefix + key + '.'))
				} else {
					target[prefix + key] = object[key]
				}
			})
		}
	} else {
		if (Object.keys(target).length > 0 && prefix !== '') {
			target[prefix.substring(0, prefix.length - 1)] = object
		} else {
			return target
		}
	}
	return target
}
