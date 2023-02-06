import axios from "axios";

export default class postService {
  static async getAll(page, limit) {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts', {
      params:{
        _page: page,
        _limit: limit
      }
    })
    return res
  }
}