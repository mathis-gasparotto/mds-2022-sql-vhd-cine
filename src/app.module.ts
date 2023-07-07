import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { AppController } from './app.controller';
import { MovieModule } from './movie/movie.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      port: 3306,
      username: 'root',
      password: '',
      database: 'vhd-cine',
      autoLoadEntities: true,
      synchronize: true,
    }),
    MovieModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
