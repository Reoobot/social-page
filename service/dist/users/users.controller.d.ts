import { CreateProfileDto } from "./dto/create.profile.dto";
import { CreateUserDto } from "./dto/create.users.dto";
import { UpdateUserDto } from "./dto/update.user";
import { User } from "./entitty.ts/user.entity";
import { UsersService } from "./users.services";
export declare class UserController {
    private usersService;
    constructor(usersService: UsersService);
    createUser(newUser: CreateUserDto): Promise<User | import("@nestjs/common").HttpException>;
    getUsers(): Promise<User[]>;
    getUser(id: number): Promise<User | import("@nestjs/common").HttpException>;
    deleteUser(id: number): Promise<import("@nestjs/common").HttpException | import("typeorm").DeleteResult>;
    updateUser(id: number, user: UpdateUserDto): Promise<import("@nestjs/common").HttpException | (User & UpdateUserDto)>;
    createProfile(id: number, profile: CreateProfileDto): Promise<User | import("@nestjs/common").HttpException>;
    getProfile(): Promise<import("./entitty.ts/profile.entity").Profile[]>;
}
