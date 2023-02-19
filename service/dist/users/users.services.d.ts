import { HttpException } from "@nestjs/common";
import { Repository } from "typeorm";
import { CreateProfileDto } from "./dto/create.profile.dto";
import { CreateUserDto } from "./dto/create.users.dto";
import { UpdateUserDto } from "./dto/update.user";
import { Profile } from "./entitty.ts/profile.entity";
import { User } from "./entitty.ts/user.entity";
export declare class UsersService {
    private userRepository;
    private profileRepistory;
    constructor(userRepository: Repository<User>, profileRepistory: Repository<Profile>);
    createUser(user: CreateUserDto): Promise<User | HttpException>;
    getUsers(): Promise<User[]>;
    getUser(id: number): Promise<User | HttpException>;
    deleteUser(id: number): Promise<HttpException | import("typeorm").DeleteResult>;
    updateUser(id: number, user: UpdateUserDto): Promise<HttpException | (User & UpdateUserDto)>;
    crateProfile(id: number, profile: CreateProfileDto): Promise<User | HttpException>;
    getProfile(): Promise<Profile[]>;
}
