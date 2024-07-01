import { SongsService } from './songs.service';
import { CreateSongs } from './dto/create-songs/create-songs';
import { Connection } from 'src/common/constants/connection';
export declare class SongsController {
    private songsService;
    private connection;
    constructor(songsService: SongsService, connection: Connection);
    create(CreateSongs: CreateSongs): any[];
    findAll(): any[];
    findOne(id: number): string;
    update(): string;
    delete(): string;
}
