import {
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthRequest } from './models/AuthRequest';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  login(@Request() req: AuthRequest) {
    //? The Request its a express req in the low level who contains (in this case)
    //? a prop called user charged by our Guard (LocalAuthGuard)
    //? So our method validateUser method who returns the user ensure that

    return this.authService.login(req.user);
  }
}

//? The guards can be registed on controllers or modules
//? The local guard will be placed on login route
//? The JWT will be placed on the other routes
