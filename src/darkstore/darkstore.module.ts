import { Module } from '@nestjs/common';
import { DarkstoreService } from './darkstore.service';
import { DarkstoreController } from './darkstore.controller';

@Module({
  controllers: [DarkstoreController],
  providers: [DarkstoreService],
})
export class DarkstoreModule {}
