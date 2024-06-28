import { Controller, Get, Delete,Post, Put, Body } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongs } from './dto/create-songs/create-songs';

@Controller('songs')
export class SongsController {
  //writing a constructor to fetch from service
  constructor(private songsService: SongsService){}

    @Post()
    create(@Body() CreateSongs:CreateSongs) {
      return this.songsService.create(CreateSongs);
    }
    @Get()
    findAll() {
      return this.songsService.findAll();
    }
    @Get(':id')
    findOne() {
      return 'fetch song on the based on id';
    }
  
    @Put(':id')
    update() {
      return 'update song on the based on id';
    }
  
    @Delete(':id')
    delete() {
      return 'delete song on the based on id';
    }
  }

