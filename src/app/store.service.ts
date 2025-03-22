import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore/'; 
import{Contact} from '../app/models/contact'
@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private db: AngularFirestore) {
  }

  addContact(contact: Contact) {
    
    var contactCollection = this.db.collection<Contact>('ContactCollection');
    return contactCollection.add(contact);
  }
}
