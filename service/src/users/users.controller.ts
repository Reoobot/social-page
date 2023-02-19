import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { CreateProfileDto } from "./dto/create.profile.dto";
import { CreateUserDto } from "./dto/create.users.dto";
import { UpdateUserDto } from "./dto/update.user";
import { User } from "./entitty.ts/user.entity";
import { UsersService } from "./users.services";



@Controller ('users')
export class UserController {
    constructor(private usersService: UsersService){}

    @Post()
    createUser(@Body() newUser:CreateUserDto){
        return this.usersService.createUser(newUser)
    }

    @Get()
    getUsers():Promise<User[]>{
        return this.usersService.getUsers();
    }

    @Get(':id')
    getUser(@Param('id', ParseIntPipe) id:number){
        return this.usersService.getUser(id);
    }

    @Delete(':id')
    deleteUser(@Param('id', ParseIntPipe)id:number){
        return this.usersService.deleteUser(id)
    }

    @Put(':id/profile')
    updateUser(@Param('id', ParseIntPipe)id:number, @Body() user:UpdateUserDto){
        return this.usersService.updateUser(id, user)
    }

    @Post(':id/profile')
    createProfile(@Param('id', ParseIntPipe)id:number, @Body()profile: CreateProfileDto){
        return this.usersService.crateProfile(id, profile)
    }

    @Get('profile')
    getProfile(){
        return this.usersService.getProfile();
    }

}