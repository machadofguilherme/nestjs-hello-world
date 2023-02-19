import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {
  findAll(): object {
    return { message: 'Gatos gordos' };
  }
}
