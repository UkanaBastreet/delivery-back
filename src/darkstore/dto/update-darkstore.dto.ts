import { PartialType } from '@nestjs/mapped-types';
import { CreateDarkstoreDto } from './create-darkstore.dto';

export class UpdateDarkstoreDto extends PartialType(CreateDarkstoreDto) {}
