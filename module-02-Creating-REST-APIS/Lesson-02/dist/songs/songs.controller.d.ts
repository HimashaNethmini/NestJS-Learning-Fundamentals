import { SongsService } from './songs.service';
export declare class SongsController {
    private songsService;
    constructor(songsService: SongsService);
    create(): any[];
    findAll(): any[];
    findOne(): string;
    update(): string;
    delete(): string;
}
