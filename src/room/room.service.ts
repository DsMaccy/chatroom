import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { Room } from './entities/room.entity'

let fs = require('fs')
const ROOM_LIST_FILE = "roomList.json"
let roomList:{[id:number]: Room} = JSON.parse(ROOM_LIST_FILE)

@Injectable()
export class RoomService {
    create(createRoomDto: CreateRoomDto) {
        let maxId = -1
        for (var id in roomList) {
            if (parseInt(id) > maxId)
                maxId = parseInt(id)
        }
        let newId = maxId + 1
        roomList[newId] = createRoomDto.room
        fs.writefile(ROOM_LIST_FILE, JSON.stringify(roomList))
    }

    findAll(): Room[] {
        let arr = []
        for (var key in roomList)
            arr.push(roomList[key])
        return arr
    }

    findOne(id: number) {
        return roomList[id]
    }

    update(id: number, updateRoomDto: UpdateRoomDto) {
        if (roomList[id] === undefined)
            return
        
        roomList[id] = updateRoomDto.room
        fs.writefile(ROOM_LIST_FILE, JSON.stringify(roomList))
    }

    remove(id: number) {
        delete(roomList[id])
        fs.writefile(ROOM_LIST_FILE, JSON.stringify(roomList))
    }
}
