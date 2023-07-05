import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer, OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect } from "@nestjs/websockets";
import { GatewayService } from "./gateway.service";
import { SocketAuth } from "./socket-auth.decorator";

interface bodyRes {
    id: number
}


@WebSocketGateway(4001, {
    cors: { origin: '*' },
})
export class MyGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect{
    @WebSocketServer() server;

    constructor(
        private gatewayService :GatewayService
    ){}
    
    afterInit(server: any) {
      //console.log('Esto se ejecuta cuando inicia')
    }
    
    handleConnection(client: any, ...args: any[]) {
      //console.log('Hola alguien se conecto al socket 👌👌👌');
    }
  
    handleDisconnect(client: any) {
      //console.log('ALguien se fue! chao chao')
    }
  
    @SubscribeMessage('event_join')
    handleJoinRoom(client: any, room: string) {
      //console.log('suscrito --> ', room);
      //client.join(`room_${room}`);
    }
  
    @SubscribeMessage('event_message') //TODO Backend
    async handleIncommingMessage( client: any,
      payload: { room: string; message: string },
    ) {
      const { room, message } = payload;
      const list = await this.gatewayService.getInfoVehicle(message)
      this.server.to(`room_${room}`).emit('new_message',list);
    }
  
    @SubscribeMessage('event_leave')
    handleRoomLeave(client: any, room:string) {
      //console.log(`chao room_${room}`)
      client.leave(`room_${room}`);
    }
}