# 循环语句


### for 循环
```typescript
for (init; condition; increment) {
    ...
}
```


### for ... in 循环
```typescript
for (var i in array) {
    ...
}
```


### for ... of 循环
可以遍历 Arrays（数组）, Strings（字符串）, Maps（映射）, Sets（集合）等可迭代的数据结构等
```typescript
for (var val of array) {
    ...
}
```


### forEach 循环
```typescript
arr.forEach((val, id, array) => {
    // val: 当前值
    // id: 当前index
    // array: Array
});
```


### every 循环
```typescript
arr.every((val, id, array) => {
    // val: 当前值
    // id: 当前index
    // array: Array
    return true; // Continues, Return false will quit the iteration
});
```


### while 循环
```typescript
while (condition) {
    ...
}
```


### do...while 循环
```typescript
do {
   ...
} while (condition);
```

