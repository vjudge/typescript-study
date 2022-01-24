# Pipe (管道)
管道是具有 @Injectable() 装饰器的类。管道应实现 PipeTransform 接口

管道有两个类型:
* 转换: 管道将输入数据转换为所需的数据输出
* 验证: 对输入数据进行验证，如果验证成功继续传递；验证失败则抛出异常


### 内置管道
Nest 自带 8 个开箱即用的管道
* ValidationPipe
* ParseIntPipe
* ParseBoolPipe
* ParseArrayPipe
* ParseUUIDPipe
* DefaultValuePipe
* ParseEnumPipe
* ParseFloatPipe


### 管道
每个管道必须提供 transform() 方法，该方法有两个参数：
* value: 当前处理的参数
* metadata: 是 value 的元数据


### 转换管道
验证不是管道唯一的用处。管道也可以将输入数据转换为所需的输出
```typescript
@Get(':id')
async findOne(@Param('id', new ParseIntPipe()) id) {
  return await this.catsService.findOne(id);
}

// 会使用 UUID 3,4,5 版本 来解析字符串
@Get(':id')
async findOne(@Param('id', new ParseUUIDPipe()) id) {
    return await this.catsService.findOne(id);
}
```









