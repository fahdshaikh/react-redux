import AxiosServices from "../axiosServices";

class TodoApi {
  getTodo() {
    let api_url = `https://jsonplaceholder.typicode.com/todos?_limit=5`;
    return AxiosServices.getApi(api_url);
  }

  postTodo(data) {
    let api_url = `https://jsonplaceholder.typicode.com/todos`;
    return AxiosServices.postApi(api_url, data);
  }

  errorTodo() {
    let api_url = `https://error.typicode.com/todos?_limit=5`;
    return AxiosServices.getApi(api_url);
  }
}

export default new TodoApi();

// const getAllBillData = async () => {
//   await MasterServices.showBillSundries("", moduleId)
//     .then((res) => {
//       setAllBillData(res.data.result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
