import {Injectable} from '@angular/core';
import {Product} from '../model/product';
import {HttpClient} from '@angular/common/http';
import {Category} from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private API = 'http://localhost:3000/categories';
  products: Product[] = [{
    id: 1,
    name: 'IPhone 12',
    price: 2400000,
    description: 'New',
    category: 'Phone'
  }, {
    id: 2,
    name: 'TV 11',
    price: 1560000,
    description: 'Like new',
    category: 'TV'
  }, {
    id: 3,
    name: 'TVA 11',
    price: 1560000,
    description: 'Like new',
    category: 'TV'
  }];

  categories: Category[] = [{
    id: 1,
    name: 'Phone',
  }, {
    id: 2,
    name: 'TV',
  }, {
    id: 3,
    name: 'AA',
  }
  ];


  getAll() {
    return this.products;
  }

  saveProduct(product) {
    this.products.push(product);
  }

  getProduct(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }

  updateById(id: number, updateProduct: Product): void {
    const index = this.products.findIndex(product => product.id === id);
    {
      if (index !== -1) {
        this.products[index] = updateProduct;
      }
    }
  }

  deleteById(id: number): void {
    const index = this.products.findIndex(product => product.id === id);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }

  getAllCategory() {
    return this.categories;
  }

  constructor(private httpClient: HttpClient) {
  }

  // getAllCategories(): Observable<Category[]> {
  //   return this.httpClient.get<Category[]>(this.API);
  // }

}
