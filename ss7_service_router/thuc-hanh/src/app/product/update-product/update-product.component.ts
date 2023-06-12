import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../service/product.service';
import {Product} from '../model/product';
import {Category} from '../model/category';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  categories: Category[];
  productId: number;
  updatedProduct: Product = {id: 0, name: '', price: 0};

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    this.updatedProduct = this.productService.getProduct(this.productId);
  }

  updateProduct(): void {
    this.productService.updateById(this.productId, this.updatedProduct);
    this.router.navigate(['/product/list']);
  }
}
