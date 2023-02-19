import { Controller, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Profile } from "./entitty.ts/profile.entity";
import { User } from "./entitty.ts/user.entity";
import { UserController } from "./users.controller";
import { UsersService } from "./users.services";




@Module({
imports:[TypeOrmModule.forFeature([User, Profile])],
controllers: [UserController],
providers:[UsersService],
exports:[UsersService]

})

export class UsersModule {}