import { Injectable } from '@nestjs/common';
import { CreateDarkstoreDto } from './dto/create-darkstore.dto';
import { UpdateDarkstoreDto } from './dto/update-darkstore.dto';

@Injectable()
export class DarkstoreService {
  create(createDarkstoreDto: CreateDarkstoreDto) {
    return 'This action adds a new darkstore';
  }

  findAll() {
    return `This action returns all darkstore`;
  }

  findOne(id: number) {
    return `This action returns a #${id} darkstore`;
  }

  update(id: number, updateDarkstoreDto: UpdateDarkstoreDto) {
    return `This action updates a #${id} darkstore`;
  }

  remove(id: number) {
    return `This action removes a #${id} darkstore`;
  }
}
