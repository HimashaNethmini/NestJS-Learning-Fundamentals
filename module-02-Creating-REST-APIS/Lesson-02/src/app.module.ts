import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import { SongService } from './song/song.service';

@Module({
  imports: [SongsModule],
  controllers: [AppController],
  providers: [AppService, SongService],
})
export class AppModule {}
