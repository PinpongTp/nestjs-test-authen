import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
        console.log('!roles')
        console.log('context',context)
        console.log('reflector', this.reflector)
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user;

    console.log('Roles Guard xxx xxx', user)

    if(user.userId == 2) {
        return true;
    } else {
        return false;
    }
    // return matchRoles(roles, user.roles);
  }
}