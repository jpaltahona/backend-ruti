import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const SocketAuth = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const socket = ctx.switchToWs().getClient();
    // Aquí puedes realizar la lógica de autenticación y obtención del usuario
    const userId = socket;
    return userId;
  },
);