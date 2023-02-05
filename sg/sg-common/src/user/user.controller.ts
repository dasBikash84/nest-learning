import { Body, ClassSerializerInterceptor, Controller, Delete, Get, Ip, NotFoundException, Param, Patch, Post, Query, Session, UseGuards, UseInterceptors } from '@nestjs/common';
import { User } from 'src/db/entities/user.entity';
import { CurrentUser } from 'src/decorators/current-user.decorators';
import { RequestHeader } from 'src/decorators/req-header-gen.decorator';
import { CreateUserDto } from 'src/dtos/create-user.dto';
import { UpdateUserDto } from 'src/dtos/update-user.dto';
import { UserDataDto } from 'src/dtos/user-data.dto';
import { AuthGuard } from 'src/guards/auth.guard';
import { CurrentUserInterceptor } from 'src/interceptors/current-user.interceptors';
import { ReqHeaderParserInterceptor } from 'src/interceptors/req-header-gen.interceptors';
import { Serialize, SerializeInterceptor } from 'src/interceptors/serialize.interceptor';
import { RequestHeaderModel } from 'src/models/header.model';
import { AuthService } from './auth.service';
import { UserService } from './user.service';

@Controller('user')
@Serialize(UserDataDto)
@UseInterceptors(CurrentUserInterceptor)
export class UserController {

  constructor(
    private usersService: UserService,
    private authService : AuthService
    ) {}

  @Post('/signup')
  async createUser(@Body() body: CreateUserDto,@Session() session: any) {
    const {email,password} = body;
    const user = await this.authService.signup(email, password);
    session.userId = user.id;
    return user;
  }

  @Post('/login')
  async login(@Body() body: CreateUserDto,@Session() session: any) {
    const {email,password} = body;
    const user =  await this.authService.login(email, password);
    session.userId = user.id;
    return user;
  }

  @Get('/signout')
  signOut(@Session() session: any) {
    session.userId = null;
    return {message:'User logged out.'};
  }

  @Get('all')
  async findAllUsers() {
    const users = await this.usersService.findAllUsers();
    return users;
  }

  // @Get('/:id')
  // async findUser(@Param('id') id: string) {
  //   const user = await this.usersService.findOne(id);
  //   console.log(user);
  //   if (!user) {
  //     throw new NotFoundException('user not found');
  //   }
  //   return user;
  // }

  @Get()
  @UseGuards(AuthGuard)
  async findUser(
    @CurrentUser() userData:User,
    @RequestHeader() header:RequestHeaderModel
  ) {
    if(!userData){
      throw new NotFoundException('user not found');
    }
    return userData;
  }

  @Delete('/:id')
  removeUser(@Param('id') id: string) {
    return this.usersService.remove(id);
  }

  @Patch('/:id')
  updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return this.usersService.update(id, body);
  }
}
