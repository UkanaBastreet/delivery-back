import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DarkstoreService } from './darkstore.service';
import { CreateDarkstoreDto } from './dto/create-darkstore.dto';
import { UpdateDarkstoreDto } from './dto/update-darkstore.dto';

@Controller('darkstore')
export class DarkstoreController {
  constructor(private readonly darkstoreService: DarkstoreService) {}

  @Post()
  create(@Body() createDarkstoreDto: CreateDarkstoreDto) {
    return this.darkstoreService.create(createDarkstoreDto);
  }

  @Get()
  findAll() {
    return this.darkstoreService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.darkstoreService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDarkstoreDto: UpdateDarkstoreDto) {
    return this.darkstoreService.update(+id, updateDarkstoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.darkstoreService.remove(+id);
  }
}
