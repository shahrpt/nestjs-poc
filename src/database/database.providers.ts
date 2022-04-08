import {createConnection } from 'typeorm';
export const databaseProviders  = [
    {
        provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'postgres',
      host: 'localhost',
      port: 3306,
      username: 'postgres',
      password: 'shah@1234',
      database: 'nest_poc_db',
      entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
      ],
      synchronize: true,
    }),
    },
] 