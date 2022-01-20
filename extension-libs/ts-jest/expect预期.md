# expect


### 方法
* expect(value)
* expect.extend(matchers): 自定义匹配器
* expect.anything()
* expect.any(constructor)
* expect.arrayContaining(array)
* expect.assertions(number)
* expect.hasAssertions()
* expect.not.arrayContaining(array)
* expect.not.objectContaining(object)
* expect.not.stringContaining(string)
* expect.not.stringMatching(string | regexp)
* expect.objectContaining(object)
* expect.stringContaining(string)
* expect.stringMatching(string | regexp)
* expect.addSnapshotSerializer(serializer)


### 匹配器方法
* .not
* .resolves
* .rejects
* .toBe(value)
* .toHaveBeenCalled()
* .toHaveBeenCalledTimes(number)
* .toHaveBeenCalledWith(arg1, arg2, ...)
* .toHaveBeenLastCalledWith(arg1, arg2, ...)
* .toHaveBeenNthCalledWith(nthCall, arg1, arg2, ....)
* .toHaveReturned()
* .toHaveReturnedTimes(number)
* .toHaveReturnedWith(value)
* .toHaveLastReturnedWith(value)
* .toHaveNthReturnedWith(nthCall, value)
* .toHaveLength(number)
* .toHaveProperty(keyPath, value?)
* .toBeCloseTo(number, numDigits?)
* .toBeDefined()
* .toBeFalsy()
* .toBeGreaterThan(number | bigint)
* .toBeGreaterThanOrEqual(number | bigint)
* .toBeLessThan(number | bigint)
* .toBeLessThanOrEqual(number | bigint)
* .toBeInstanceOf(Class)
* .toBeNull()
* .toBeTruthy()
* .toBeUndefined()
* .toBeNaN()
* .toContain(item)
* .toContainEqual(item)
* .toEqual(value)
* .toMatch(regexp | string)
* .toMatchObject(object)
* .toMatchSnapshot(propertyMatchers?, hint?)
* .toMatchInlineSnapshot(propertyMatchers?, inlineSnapshot)
* .toStrictEqual(value)
* .toThrow(error?)
* .toThrowErrorMatchingSnapshot(hint?)
* .toThrowErrorMatchingInlineSnapshot(inlineSnapshot)













