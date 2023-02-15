import { CreateUserDto } from "./dto/create.users.dto";
import { User } from "./entitty.ts/user.entity";
import { UsersService } from "./users.services";
export declare class UserController {
    private usersService;
    constructor(usersService: UsersService);
    createUser(newUser: CreateUserDto): Promise<User | import("@nestjs/common").HttpException>;
    getUsers(): Promise<User[]>;
    getUser(id: number): Promise<User | import("@nestjs/common").HttpException>;
    deleteUser(id: number): Promise<import("@nestjs/common").HttpException | import("typeorm").DeleteResult>;
    updateUser(id: number, user: CreateUserDto): UsersService;
}
