import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import { SongsService } from './songs/songs.service';

@Module({
  imports: [SongsModule],
  controllers: [AppController],
  providers: [AppService, SongsService],
})
export class AppModule {}
