import {
    Controller,
    Req,
    Res,
    Get,
    Post,
    Put,
    Delete,
    Patch,
    Options,
    Head,
    All,
    Header,
    Query,
    Param,
    Body,
    HttpCode,
    HttpStatus,
    Redirect,
} from '@nestjs/common';
import { Request, Response } from 'express';

import { UserService } from './user.service'

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Post() // @Put()
    @HttpCode(204)
    @Header('Cache-Control', 'none')
    addUser (@Body() body) {
    }

    @Get()
    getUser1 (@Query() query): string {
        return { limit: query.limit }
    }

    @Get()
    getUser2 (@Param() params): string {
        return { limit: query.limit }
    }

    @Get()
    getUser (@Param('userid') userid: string): string {
        return 'vjudge'
    }

    @Get()
    findUser (@Req() req: Request): string {
        return 'vjudge'
    }

    @Get()
    findUser (@Req() req: Request): string {
        return 'vjudge'
    }

    @Get()
    findUser1 (@Res() res: Response) {
        return res.status(HttpStatus.OK).send({ name: 'vjudge' })
        // return res.status(HttpStatus.OK).json({ name: 'vjudge' })
    }

    @Get()
    findUser2 (@Res({ passthrough: true }) res: Response) {
        res.status(HttpStatus.OK);
        return [];
    }

    @Get('docs')
    @Redirect('https://docs.nestjs.com', 302)
    getDocs(@Query('version') version) {
        if (version && version === '5') {
            return { url: 'https://docs.nestjs.com/v5/' };
        }
    }
}
