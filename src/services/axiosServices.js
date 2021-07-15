import axios from "axios";

class AxiosService {
  getApi = (url, isHeaderReq = false, header = null) => {
    return axios.get(url, isHeaderReq && header);
  };

  postApi = (url, data, isHeaderReq = false, header = null) => {
    return axios.post(url, data, isHeaderReq && header, { timeout: 20000 });
  };

  putApi = (url, data, isHeaderReq = false, header = null) => {
    return axios.put(url, data, isHeaderReq && header);
  };

  deleteApi = (url, isHeaderReq = false, header = null) => {
    return axios.delete(url, isHeaderReq && header);
  };
}
export default new AxiosService();

// class ApiCalls {
//   apiHeader = (module_id) => {
//     if (localStorage.getItem("isSuperUser") === "true") {
//       return {
//         headers: {
//           PORTAL: localStorage.getItem("subDomain"),
//           Authorization: localStorage.getItem("id"),
//         },
//       };
//     } else {
//       return {
//         headers: {
//           PORTAL: localStorage.getItem("subDomain"),
//           Authorization: localStorage.getItem("id"),
//           organization: localStorage.getItem("org_id"),
//           module: module_id,
//         },
//       };
//     }
//   };

//   getAPI(Id, moduleId) {
//     let api_url = `${config.url}masters/locations/countries/${Id}/details`;
//     return axios.getApi(api_url, true, this.apiHeader(moduleId));
//   }

//   postAPI(value, moduleId) {
//     let api_url = config.url + "masters/locations/countries/";
//     return axios.postApi(api_url, value, true, this.apiHeader(moduleId));
//   }

//   putAPI(value, Id, moduleId) {
//     let api_url = `${config.url}masters/locations/countries/${Id}/details`;
//     return axios.putApi(api_url, value, true, this.apiHeader(moduleId));
//   }

//   deleteAPI(Id, moduleId) {
//     let api_url = `${config.url}masters/locations/countries/${Id}/details`;
//     return axios.deleteApi(api_url, true, this.apiHeader(moduleId));
//   }

// }

// export default new ApiCalls();
