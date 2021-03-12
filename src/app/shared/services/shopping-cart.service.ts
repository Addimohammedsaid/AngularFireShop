import { Observable, pipe } from "rxjs";
import { ShoppingCart } from "./../models/shopping-cart";
import { Product } from "./../models/product";
import { Injectable } from "@angular/core";
import { take, map, tap } from "rxjs/internal/operators";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root",
})
export class ShoppingCartService {

  url:string = "shopping-cart";

  constructor(private db: AngularFirestore) {}

  //========== GET ==========//

  async getCart(): Promise<Observable<ShoppingCart>> {    
    // get cart id
    let carteId:string = await this.getCartId();    

    // return data from cart
    let items = this.db.collection(this.url).doc(carteId).collection('items').snapshotChanges();
    
    return items.pipe(map((items) => {
      let itemsmodif:any = [];
      items.map((c)=> {
        itemsmodif[c.payload.doc.id] =  { ...c.payload.doc.data()};
      });      
      return (new ShoppingCart(itemsmodif))
    }));            
  }

  // get or create carte from local storage
  private async getCartId(): Promise<string> {    

    // get cart id from local storage
    let cartId = localStorage.getItem("cartId");
    if (cartId) return cartId;

    // else create cart id
    let key = await this.create();
    localStorage.setItem("cartId", key);

    return key;
  }

  //========== POST ==========//

  private create() {
    // generate key
    const key = this.db.createId();        

    // get collection from db
    this.db.collection(this.url).doc(key).set({
      dateCreated: new Date().getTime(),
    });    

    // return the doc key
    return key;
  }

  //========== UPDATE ==========//

  async addToCart(product: Product) {
    // increase cart by 1 & add product to cart
    this.updateCarte(product, 1);
  }

  async updateCarte(product: Product, c: number) {    
    // get Cart id
    let cartId:string = await this.getCartId();    

    // ref to add product
    let item$ = this.db.collection(this.url).doc(cartId).collection('items').doc(product.key);
    
    // update to product quantity
    item$.snapshotChanges().pipe(take(1))
      .subscribe((item) => {        

        if(item.payload.exists)
          item$.update({                 
            quantity: item.payload.data()["quantity"] + c,
        })

        else item$.set({  
          product : product,        
          quantity: 0 + c,
        })

      });
  }

  //========== DELETE ==========//

  // remove -1 quantity product from cart
  async removeFromCart(product: Product) {
    this.updateCarte(product, -1);
  }

  //========== UTILS ==========//

  async clearCart() {
    // get Cart id
    let cartId = await this.getCartId();    

    // clear all cart    
    this.db.collection(this.url).doc(cartId).collection('items')
    .get()
    .toPromise()
    .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      doc.ref.delete();
    })});

  }

}
