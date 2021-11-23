"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const product_entity_1 = require("./entities/product.entity");
let ProductService = class ProductService {
    constructor(products) {
        this.products = products;
        this.counter = products.length;
    }
    create(createProductDto) {
        this.counter++;
        this.products.push(new product_entity_1.Product(`${this.counter}`, createProductDto.name, '', createProductDto.price));
    }
    findAll() {
        return this.products;
    }
    findOne(id) {
        const product = this.products.find((product) => id === product.id);
        if (!product) {
            throw new common_1.NotFoundException();
        }
        return product;
    }
    findMany(ids) {
        const product = this.products.filter((product) => ids.some((id) => product.id === id));
        return product;
    }
    checkForItemExistence(ids) {
        ids.forEach((id) => {
            if (!this.products.some((product) => product.id === id)) {
                throw new common_1.BadRequestException('some product ids missing in product list');
            }
        });
        return true;
    }
    update(id, updateProductDto) {
        const product = this.findOne(id);
        if (updateProductDto.name) {
            product.name = updateProductDto.name;
        }
        if (updateProductDto.price) {
            product.price = updateProductDto.price;
        }
    }
    remove(id) {
        const index = this.products.findIndex((product) => product.id === id);
        if (index === -1) {
            throw new common_1.NotFoundException();
        }
        this.products.splice(index, 1);
    }
};
ProductService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [Array])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map