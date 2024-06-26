import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

@Controller('songs')
export class SongsController {
    
    @Post()
    create() {
        return 'create a new song endpoint';
    }

    @Get()
    findAll(){
        return ' find all songs endpoint';
    }

    @Get(':id')
    findOne(){
        return 'find one song endpoint';
    }

    @Put(':id')
    update(){
        return 'update one song details endpoint';
    }

    @Delete(':id')
    delete(){
        return ' delete a specific song endpoint';
    }
}