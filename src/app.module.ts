import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlunoModule } from './aluno/aluno.module';

@Module({
  imports: [TypeOrmModule.forRoot(), AlunoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
