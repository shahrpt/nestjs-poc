import { Inject, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductsService {
  //constructor(@Inject('PRODUCT_REPOSITORY')
  constructor(@InjectRepository(Product) private productRepo: Repository<Product>) {}
  create(product: Product) {
    return this.productRepo.insert(product);
  }

  findAll():Promise<Product[]> {
    return this.productRepo.find();
  }

  findOne(id: number) {
    return this.productRepo.findOne(id);
  }

  update(id: number, product: Product) {
    return this.productRepo.update(id,product);
  }

  remove(id: number) {
    return this.productRepo.delete(id);
  }
}
