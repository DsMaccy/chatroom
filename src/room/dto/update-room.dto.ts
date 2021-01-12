import { PartialType } from '@nestjs/mapped-types';
import { CreateRoomDto } from './create-room.dto';
import { Room } from '../entities/room.entity';

export class UpdateRoomDto extends PartialType(CreateRoomDto) {
    constructor(room: Room) {
        super(room)
    }
}