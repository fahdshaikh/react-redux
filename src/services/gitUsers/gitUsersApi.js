import AxiosServices from "../axiosServices";

class GitUsers {
  getUsers(query) {
    let api_url = `https://api.github.com/search/users?q=${query}&page=1&per_page=8`;
    return AxiosServices.getApi(api_url, query);
  }
}

export default new GitUsers();
