let message
message = 'abc'  // <= type is 'any'

// to assert a string type, enclose in parenthesis and assert as string
// this allows string methods and makes intelliSense available
let endsWithC = (<string>message).endsWith('c')
let alternativeWay = (message as string).endsWith('c')


