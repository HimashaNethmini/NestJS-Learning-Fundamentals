import { SongsService } from './songs.service';
import { CreateSongs } from './dto/create-songs/create-songs';
export declare class SongsController {
    private songsService;
    constructor(songsService: SongsService);
    create(CreateSongs: CreateSongs): any[];
    findAll(): any[];
    findOne(id: number): string;
    update(): string;
    delete(): string;
}
