import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Category} from '../../model/category';
import {Product} from '../../model/product';
import {ProductService} from '../../service/service/product-service';
import {CategoryService} from '../../service/service/category-service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  categories: Category[];
  product: Product = {
    id: 0,
    name: '',
    price: 0,
    description: '',
    category: null
  };

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories() {
    this.categoryService.getAllCategory().subscribe(
      (data: Category[]) => {
        this.categories = data;
      }
    );
  }

  save() {
    this.productService.save(this.product).subscribe(next => {
      this.router.navigateByUrl('/product/list');
    });
  }


}
