import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    create(createProductDto: CreateProductDto): void;
    findAll(): {
        products: import("./entities/product.entity").Product[];
    };
    findOne(id: string): import("./entities/product.entity").Product;
    update(id: string, updateProductDto: UpdateProductDto): void;
    remove(id: string): void;
}
