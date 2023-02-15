import { HttpException } from "@nestjs/common";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create.users.dto";
import { UpdateUserDto } from "./dto/update.user";
import { User } from "./entitty.ts/user.entity";
export declare class UsersService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    createUser(user: CreateUserDto): Promise<User | HttpException>;
    getUsers(): Promise<User[]>;
    getUser(id: number): Promise<User | HttpException>;
    deleteUser(id: number): Promise<HttpException | import("typeorm").DeleteResult>;
    updateUser(id: number, user: UpdateUserDto): Promise<HttpException | (User & UpdateUserDto)>;
}
