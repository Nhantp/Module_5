import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../service/product.service';
import {Router} from '@angular/router';
import {Category} from '../model/category';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  categories: Category[];
  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl()
  });

  constructor(private productService: ProductService, private router: Router) {
  }

  submit() {
    const product = this.productForm.value;
    this.productService.saveProduct(product);
    this.router.navigateByUrl('/product/list');
    // this.productForm.reset();
  }

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories(): void {
    this.categories = this.productService.getAllCategory();
  }

}
