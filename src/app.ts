import { ProjectInput } from './components/project-input';
import { ProjectList } from './components/project-list';

import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { Product } from './product.model';
import {validate} from 'class-validator'

//import _ from 'lodash'
//console.log(_.shuffle(["1", "2", "3"]));

new ProjectInput();
new ProjectList('active');
new ProjectList('finished');

const products = [
  { title: 'A Carpet', price: 29.99 },
  { title: 'A Book', price: 10.99 }
];

console.log(products);

const p1 = new Product('A Book', 12.99);
validate(p1).then(
    errors =>{
        if(errors.length > 0){
        console.log("errors from validator");
        }
    }
);
console.log(p1.getInformation());

const loadedProducts = plainToClass(Product, products);

for (const prod of loadedProducts) {
  console.log(prod.getInformation());
}
