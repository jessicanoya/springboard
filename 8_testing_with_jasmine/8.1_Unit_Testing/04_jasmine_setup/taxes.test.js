// Format is: expect(someValue).someMatcher(...)
// Describe function allows us to group relates tests in the same namespace

describe('calculateTaxes tests', function(){
    it('should calculate the high tax backet', function(){
        expect(calculateTaxes(50000)).toEqual(12500)
        expect(calculateTaxes(100000)).toEqual(25000)
    })

    it('should calculate the low tax backet', function(){
        expect(calculateTaxes(10000)).toEqual(1500)
        expect(calculateTaxes(1000)).toEqual(150)
        expect(calculateTaxes(0)).toEqual(0)
    })

    it('should reject invalid incomes', function(){
        // Have to wrap it in a function
        expect(() => calculateTaxes('abcde')).toThrowError()
        expect(() => calculateTaxes([])).toThrowError()
        expect(() => calculateTaxes(true)).toThrowError()
    })
})

describe('removeDupes test', function(){
    it('should remove duplicates from an array', function(){
        expect(removeDupes([1, 1, 2, 2, 3, 4])).toEqual([1, 2, 3, 4])
        expect(removeDupes([1, 2, 3])).toEqual([1, 2, 3])
        expect(removeDupes([1, 2, 3])).toBeInstanceOf(Array)
    })

    it('should remove duplicates from a string', function(){
        expect(removeDupes('hello')).toEqual('helo')
        expect(removeDupes('hello')).toBeInstanceOf(String)
    })
})

describe('remove tests', function(){
    it('should remove value from array', function(){
        expect(remove([1, 2, 3, 4, 5, 6], 6)).not.toContain(6)
    })
})

describe('submitForm() tests', () => {
    it('saves input val to usernames array', () => {
        input.value = 'jess'
        submitForm()
        expect(usernames.length).toBe(1)
        expect(usernames).toContain('jess')
    })
    it('saves long usernames', () => {
        input.value = 'My name is jess noya'
        submitForm()
        expect(usernames.length).toBe(1)
    })
})

// Jasmine hooks - usefull for cleaning up code we do not want to commit
// such as resetting variables or cleaning up a database
afterEach(function () {
    input.value = ''
    usernames = []
})

beforeEach(() => {
    console.log('Before')
})

// Especially useful for logic related to connecting to a database
beforeAll(() => {
    console.log('Before all')
})

afterAll(() => {
    console.log('After all')
})