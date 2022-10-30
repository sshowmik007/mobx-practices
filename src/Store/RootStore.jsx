import { CountStore } from "./CountStore"
import { GithubUserDetailsStore } from "./GithubUserDetailsStore"

export class RootStore {
  constructor() {
    this.countStore = new CountStore(this)
    this.githubUserDetails = new GithubUserDetailsStore(this)
  }
}
