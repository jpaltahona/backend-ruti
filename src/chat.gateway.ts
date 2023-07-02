import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer, OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect } from "@nestjs/websockets";

@WebSocketGateway(81, {
    cors: { origin: '*' }
})
export class ChatGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect{
  @WebSocketServer() server;


    afterInit(server: any) {
       console.log('esto se ejecuta cuando inicia') 
    }

    handleConnection(client: any, ...args: any[]) {
        console.log('alguien se conecto ->', client, args)
    }
    handleDisconnect(client: any) {
        console.log('alguien se desconecto ->', client)
    }

    
    @SubscribeMessage('message')
    handleMessage(@MessageBody() message: string): void {
        this.server.emit('message', message);
    }
}