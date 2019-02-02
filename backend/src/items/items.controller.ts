import {
  Get,
  Post,
  Controller,
} from '@nestjs/common';

@Controller('items')
export class ItemsController {

  @Get()
  async findAll(): Promise<string[]> {
    return ['Amazon', 'Facebook', 'Google', 'Microsoft'];
  }

  @Post()
  async create() {
    return 'Not yet implemented';
  }
}
