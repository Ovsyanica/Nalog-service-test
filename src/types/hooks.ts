export function assetEnumValue<T>(value: string, validValues: string[], fieldName: string): T {
	if (!validValues.includes(value)) {
		throw new Error(`Invalid ${fieldName} value: ${value}, expected: ${validValues}`)
	}

	return value as T
}