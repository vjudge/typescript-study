# Custom Decorator (自定义装饰器)
装饰器是一个表达式，它返回一个可以将目标、名称和属性描述符作为参数的函数。通过在装饰器前面添加一个 @ 字符并将其放置在你要装饰的内容的最顶部来应用它。可以为类、方法或属性定义装饰器


### 自定义装饰器
```typescript
// user.decorator.ts
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const User = createParamDecorator((data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user;
    return data ? user && user[data] : user;
});

// user.controller.ts
@Get()
async findOne(@User() user: UserEntity) {
    console.log(user);
}

@Get()
async findOne(@User('firstName') firstName: string) {
    console.log(`Hello ${firstName}`);
}
```


### 装饰器聚合
```typescript
import { applyDecorators } from '@nestjs/common';

export function Auth(...roles: Role[]) {
  return applyDecorators(
    SetMetadata('roles', roles),
    UseGuards(AuthGuard, RolesGuard),
    ApiBearerAuth(),
    ApiUnauthorizedResponse({ description: 'Unauthorized"' })
  );
}

// 使用
@Get('users')
@Auth('admin')
findAllUsers() {}
```






