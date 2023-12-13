import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayInit,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { AppService } from '../app.service';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class AppGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  constructor(private appService: AppService) {}

  @WebSocketServer() server: Server;

  @SubscribeMessage('sendMessage')
  async handleSendMessage(
    client: Socket,
    payload: { message: string },
  ): Promise<void> {
    console.log({ payload });
    this.server.emit('recMessage', payload);
  }

  afterInit(server: Server) {
    console.log({ server });
  }

  handleDisconnect(client: Socket) {
    console.log(`Disconnected => clientID: ${client.id}`);
  }

  // handleConnection(client: Socket, ...args: any[]) {
  handleConnection(client: Socket) {
    console.log(`Connected => clientID: ${client.id}`);
  }
}
