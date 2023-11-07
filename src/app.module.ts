import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './customer/customer.module';
import { DarkstoreModule } from './darkstore/darkstore.module';
import { CourierModule } from './courier/courier.module';

@Module({
  imports: [CustomerModule, DarkstoreModule, CourierModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
