import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { Repository } from "typeorm";
import { CreateProfileDto } from "./dto/create.profile.dto";

import { CreateUserDto } from "./dto/create.users.dto";
import { UpdateUserDto } from "./dto/update.user";
import { Profile } from "./entitty.ts/profile.entity";

import { User } from "./entitty.ts/user.entity";

@Injectable()
export class UsersService {
  
    constructor(@InjectRepository(User)private userRepository:Repository <User>,
                @InjectRepository(Profile) private profileRepistory:Repository<Profile>
               ){}

    async createUser (user: CreateUserDto) {
        const userFound = await this.userRepository.findOne({
            where:{
                gmail:user.gmail
            }
        })

        if(userFound){
            return new HttpException('User already exists', HttpStatus.CONFLICT)
        }

        const newUser = this.userRepository.create(user)
        return this.userRepository.save(newUser)
    }

    getUsers(){
        return this.userRepository.find()
    }

    async getUser (id:number){
        const userFound = await this.userRepository.findOne({
            where:{
                id,
            },
            relations:['profile']
        })

            if (!userFound){
                return new HttpException('User not foud', HttpStatus. NOT_FOUND)
            }
            return userFound;
    }

    async deleteUser (id:number){
        const result = await this.userRepository.delete({id});
        if(result.affected === 0){
            return new HttpException('User no found', HttpStatus.NOT_FOUND)
             }
            return result
   }

   async updateUser(id:number, user:UpdateUserDto){
    const userFound = await this.userRepository.findOne({
        where:{
            id
        }
    })
        if(!userFound){
            return new HttpException('User no fout', HttpStatus.NOT_FOUND)
        }

        const updateUser = Object.assign(userFound, user);
        return this.userRepository.save(updateUser)
   }

//    -----------CRAEATER NEW REPOSITORIO

        async crateProfile(id:number, profile:CreateProfileDto){
            const userFound = await this.userRepository.findOne({where:{id,}})

            if(!userFound){
                return new HttpException('User no found', HttpStatus.NOT_FOUND)
            }
            const newProfile = this.profileRepistory.create(profile)
            const savedProfile = await this.profileRepistory.save(newProfile)
            userFound.profile = savedProfile
        
            return this.userRepository.save(userFound)
        }

        getProfile(){
            return this.profileRepistory.find();
        }

    
}