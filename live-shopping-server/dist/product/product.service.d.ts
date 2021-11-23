import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductService {
    private products;
    private counter;
    constructor(products: Product[]);
    create(createProductDto: CreateProductDto): void;
    findAll(): Product[];
    findOne(id: string): Product;
    findMany(ids: string[]): Product[];
    checkForItemExistence(ids: string[]): boolean;
    update(id: string, updateProductDto: UpdateProductDto): void;
    remove(id: string): void;
}
