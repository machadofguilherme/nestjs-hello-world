import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { CatController } from './controller/cat.controller';
import { AppService } from './service/app.service';
import { CatService } from './service/cat.service';

@Module({
  imports: [],
  controllers: [AppController, CatController],
  providers: [AppService, CatService],
})
export class AppModule {}
