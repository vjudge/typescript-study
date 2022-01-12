# Map


### 创建 Map
```typescript
let mymap = new Map();
```


### Map 相关函数与属性
* map.clear() : 移除 Map 对象的所有键/值对
* map.set() : 设置键值对，返回该 Map 对象
* map.get() : 返回键对应的值，如果不存在，则返回 undefined
* map.has() : 返回一个布尔值，用于判断 Map 中是否包含键对应的值
* map.delete() : 删除 Map 中的元素，删除成功返回 true，失败返回 false
* map.size : 返回 Map 对象键/值对的数量
* map.keys() : 返回一个 Iterator 对象， 包含了 Map 对象中每个元素的键 
* map.values() : 返回一个新的Iterator对象，包含了Map对象中每个元素的值 


### 迭代 Map
```typescript
// 迭代 Map 中的 key
for (let key of mymap.keys()) {
    ...                 
}
 
// 迭代 Map 中的 value
for (let value of mymap.values()) {
    ...              
}
 
// 迭代 Map 中的 key => value
for (let item of mymap.entries()) {
    console.log(item[0], item[1]);   
}
 
// 使用对象解析
for (let [key, value] of mymap) {
    ...          
}
```

