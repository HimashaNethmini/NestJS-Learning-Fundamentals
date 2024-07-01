import { Injectable } from '@nestjs/common';


@Injectable()
export class SongsService {
    //local db
    //local array

    private readonly songs = [];

    //create crud
    create(song){
        this.songs.push(song);
        return this.songs;
    }

    //get crud
    findAll(){
        //fetch from database
        //error handling
        throw new Error('Error in DB');
        return this.songs;
    }

}
