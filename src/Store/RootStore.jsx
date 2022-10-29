
import { CountStore } from "./CountStore"


export class RootStore {
  constructor() {
    this.countStore = new CountStore(this)
    
  }
}