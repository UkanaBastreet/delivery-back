import { Test, TestingModule } from '@nestjs/testing';
import { DarkstoreController } from './darkstore.controller';
import { DarkstoreService } from './darkstore.service';

describe('DarkstoreController', () => {
  let controller: DarkstoreController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DarkstoreController],
      providers: [DarkstoreService],
    }).compile();

    controller = module.get<DarkstoreController>(DarkstoreController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
