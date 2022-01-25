# 权限 & 认证 & 安全


### 认证 (Authentication)
见[]()


### CORS
跨源资源共享（CORS）是一种允许从另一个域请求资源的机制。在底层，Nest 使用了Express的cors 包
```typescript
// 方法一
app.enableCors({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
});

// 方法二
const app = await NestFactory.create(AppModule, { cors: true });
```


### CSRF
跨站点请求伪造（称为 CSRF 或 XSRF）是一种恶意利用网站，其中未经授权的命令从 Web 应用程序信任的用户传输。要减轻此类攻击，您可以使用 csurf 软件包
```shell
$ npm i --save csurf
```

```typescript
// main.ts
import * as csurf from 'csurf';

app.use(csurf());
```


### 限速
为了保护您的应用程序免受暴力攻击，您必须实现某种速率限制。可以使用 express-rate-limit
```shell
$ npm i --save express-rate-limit
```

```typescript
// main.ts
import * as rateLimit from 'express-rate-limit';

app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  }),
);
```









