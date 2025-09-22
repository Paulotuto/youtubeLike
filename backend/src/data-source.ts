import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from '../src/entities/User'; // ton entité User

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'srv1047.hstgr.io',
  port: 3306,
  username: 'u693597802_P',
  password: '6bp#da4q##GNX.w',
  database: 'u693597802_youtubelikeP',
  synchronize: false,
  logging: true,
  entities: [User],
  migrations: ['src/migrations/*.ts'],
  subscribers: [],
});
