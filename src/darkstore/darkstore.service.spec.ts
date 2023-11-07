import { Test, TestingModule } from '@nestjs/testing';
import { DarkstoreService } from './darkstore.service';

describe('DarkstoreService', () => {
  let service: DarkstoreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DarkstoreService],
    }).compile();

    service = module.get<DarkstoreService>(DarkstoreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
