import { Profile } from "./profile.entity";
export declare class User {
    id: number;
    gmail: string;
    password: string;
    createdAt: Date;
    authStrategy: string;
    affected: number;
    profile: Profile;
}
