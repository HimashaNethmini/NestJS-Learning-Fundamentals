import {
  Controller,
  Get,
  Delete,
  Post,
  Put,
  Body,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Inject,
  Scope
} from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongs } from './dto/create-songs/create-songs';
import { Connection } from 'src/common/constants/connection';

@Controller({ path: 'songs', scope: Scope.REQUEST })
export class SongsController {
  //writing a constructor to fetch from service
  constructor(
    private songsService: SongsService,
    @Inject('CONNECTION')
    private connection: Connection,
  ) 
  {
    console.log (`THIS IS CONNECTION STRING ${this.connection.CONNECTION_STRING}`,   
    );
  }

  @Post()
  create(@Body() CreateSongs: CreateSongs) {
    return this.songsService.create(CreateSongs);
  }

  //adding error handling to fetch all function
  @Get()
  findAll() {
    try {
      return this.songsService.findAll();
    } catch (e) {
      throw new HttpException(
        'server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: e,
        },
      );
    }
  }

  @Get(':id')
  findOne(
    @Param(
      'id',
      new ParseIntPipe({errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE}),
    )
    id: number,
  ) {
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
