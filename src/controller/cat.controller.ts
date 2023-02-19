import { Controller, Get } from '@nestjs/common';
import { CatService } from 'src/service/cat.service';

@Controller('cat')
export class CatController {
  constructor(private _service: CatService) {}

  @Get()
  findAll(): object {
    return this._service.findAll();
  }
}
