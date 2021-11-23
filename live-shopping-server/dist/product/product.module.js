"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModule = void 0;
const common_1 = require("@nestjs/common");
const product_service_1 = require("./product.service");
const product_controller_1 = require("./product.controller");
const product_entity_1 = require("./entities/product.entity");
let ProductModule = class ProductModule {
};
ProductModule = __decorate([
    common_1.Module({
        controllers: [product_controller_1.ProductController],
        providers: [
            {
                provide: product_service_1.ProductService,
                useValue: new product_service_1.ProductService([
                    new product_entity_1.Product('1', 'BLACK MINI SKIRT', 'https://cdn.shopify.com/s/files/1/0538/0987/3076/products/laura-chouette-WLSiDqaBeuc-unsplash_350x350.jpg?v=1624521287', 13500),
                    new product_entity_1.Product('2', 'GREEN KNIT SWEATER', 'https://cdn.shopify.com/s/files/1/0538/0987/3076/products/rocknwool-JgDbCod2gg4-unsplash_350x350.jpg?v=1624521145', 20000),
                    new product_entity_1.Product('3', 'HIGH RISE JEANS', 'https://cdn.shopify.com/s/files/1/0538/0987/3076/products/lucas-lenzi-i227dPHaQ7s-unsplash_350x350.jpg?v=1624521410', 43500),
                    new product_entity_1.Product('4', 'KNIT CROP TOP', 'https://cdn.shopify.com/s/files/1/0538/0987/3076/products/devn-53ouhY5koKY-unsplash_350x350.jpg?v=1624521088', 65000),
                    new product_entity_1.Product('5', 'KNIT SWEATER', 'https://cdn.shopify.com/s/files/1/0538/0987/3076/products/rocknwool-pihg_Jt-Xrg-unsplash_350x350.jpg?v=1624520868', 23000),
                    new product_entity_1.Product('6', 'SNEAKERS', 'https://cdn.shopify.com/s/files/1/0538/0987/3076/products/quokkabottles-Ejc1F0eON_4-unsplash_350x350.jpg?v=1624523330', 45000),
                    new product_entity_1.Product('7', 'STRIPED SHIRT DRESS', 'https://cdn.shopify.com/s/files/1/0538/0987/3076/products/engin-akyurt-xbFtknoQG_Y-unsplash_350x350.jpg?v=1624520708', 12000),
                ]),
            },
        ],
        exports: [product_service_1.ProductService],
    })
], ProductModule);
exports.ProductModule = ProductModule;
//# sourceMappingURL=product.module.js.map