import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { DatabaseModule } from 'src/database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Product]) ],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule {}
