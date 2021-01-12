import { Room } from '../entities/room.entity'

export class CreateRoomDto {
    public room: Room
    constructor(room: Room) {
    }
}
