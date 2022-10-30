import { action, computed, makeObservable, observable } from "mobx"
import axios from "axios"

export class GithubUserDetailsStore {
  userDetails = {}

  constructor(rootStore) {
    makeObservable(this, {
      userDetails: observable,
      fetchGithubUserDetails: action,
      getUserDetails: computed
    })
    this.rootStore = rootStore
  }

  async fetchGithubUserDetails(userName) {
    const response = await axios.get(`https://api.github.com/users/${userName}`)
    this.userDetails = response?.data
  }
  get getUserDetails() {
    return this.userDetails
  }
}
