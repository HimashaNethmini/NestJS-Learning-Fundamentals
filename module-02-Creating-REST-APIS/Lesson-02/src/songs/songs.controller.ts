import { Controller, Get, Delete,Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  //writing a constructor to fetch from service
  constructor(private songsService: SongsService){}

    @Post()
    create() {
      return this.songsService.create('Animals by Bruno Mars');
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

