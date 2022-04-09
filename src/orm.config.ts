import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const config :TypeOrmModuleOptions = {
    type:'postgres',
    username:'postgres',
    password:'shah@1234',
    port:5433,
    host:'localhost',
    database:'nest_poc_db',
    synchronize:true,
    "entities": ["dist/**/*.entity{.ts,.js}"]
}