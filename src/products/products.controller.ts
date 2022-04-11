import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post('create')
  create(@Body() product: Product) {
    return this.productsService.create(product);
  }

  @Get('all')
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    var retVal = await this.productsService.findOne(+id);
    if (!retVal) 
      throw new BadRequestException('Invalid product id');
    return retVal;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() product: Product) {
    return this.productsService.update(+id, product);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
