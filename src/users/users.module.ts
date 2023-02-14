import { Controller, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./entitty.ts/user.entity";
import { UserController } from "./users.controller";
import { UsersService } from "./users.services";




@Module({
imports:[TypeOrmModule.forFeature([User])],
controllers: [UserController],
providers:[UsersService],
exports:[UsersService]

})

export class UsersModule {}