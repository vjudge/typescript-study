# 函数


### 定义
```typescript
function func_name():return_type {
    ...
    return result
}
// 函数调用
func_name();
```


### 带参数的函数
```typescript
// param1: 必选参数
// param2: 可选参数, 加 ?
// param3: 默认参数, 加default_val
function func_name (param1 [:type], param2? [:type], param3 [:type] = default_val):return_type { 
    ...
}
// restOfName: 剩余参数，剩余参数语法允许我们将一个不确定数量的参数作为一个数组传入
function buildName(...restOfName: string[]) {
    ...
}
```










