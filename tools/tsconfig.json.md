# tsconfig.json

如果一个目录下存在一个 tsconfig.json 文件，那么它意味着这个目录是 TypeScript 项目的根目录

tsconfig.json 文件中指定了用来编译这个项目的根文件和编译选项


使用tsconfig.json
* 不带任何输入文件的情况下调用 tsc，编译器会从当前目录开始去查找 tsconfig.json 文件，逐级向上搜索父目录。
* 不带任何输入文件的情况下调用 tsc，且使用命令行参数 --project (或-p) 指定一个包含 tsconfig.json 文件的目录
* 在命令行上指定的编译选项会覆盖在tsconfig.json文件里的相应选项
```json
{
    "compilerOptions": {
    },
    "include": [
    ], 
    "files": [
    ],
    "exclude": [
    ]
}
```
如果"files"和"include"都没有被指定，编译器默认包含当前目录和子目录下所有的TypeScript文件（.ts, .d.ts 和 .tsx），排除在"exclude"里指定的文件



### compilerOptions
可以被忽略，这时编译器会使用默认值
```json
{
    "compilerOptions": {
      // 指定的目录下的文件永远会被编译器排除，除非你明确地使用"files"将其包含进来
      "outDir": "./dist"
    }
}
```


### files
指定一个包含相对或绝对文件路径的列表

通过"files"属性明确指定的文件却总是会被包含在内，不管"exclude"如何设置

任何被"files"或"include"指定的文件所引用的文件也会被包含进来


### include
使用"include"引入的文件可以使用"exclude"属性过滤

指定一个文件glob匹配模式列表。支持的glob通配符有：
* / * : 匹配0或多个字符（不包括目录分隔符）
* / ? : 匹配一个任意字符（不包括目录分隔符）
* / **/ : 递归匹配任意子目录
* 如果一个glob模式里的某部分只包含 * 或 .*，那么仅有支持的文件扩展名类型被包含在内(比如默认.ts，.tsx，和.d.ts， 如果allowJs设置能true还包含.js和.jsx)


### exclude
如果没有特殊指定，"exclude"默认情况下会排除node_modules，bower_components，jspm_packages和<outDir>目录

指定一个文件glob匹配模式列表


### @types
默认所有可见的”@types“包会在编译过程中被包含进来。 node_modules/@types文件夹下以及它们子文件夹下的所有包都是可见的

如果指定了typeRoots，只有typeRoots下面的包才会被包含进来

如果指定了types，只有被列出来的包才会被包含进来



### 继承配置
利用extends属性从另一个配置文件里继承配置

在原文件里的配置先被加载，然后被来至继承文件里的配置重写。 如果发现循环引用，则会报错







