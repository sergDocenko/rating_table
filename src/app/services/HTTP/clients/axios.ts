import axios from "axios";
import { RequestParams } from "@/app/types";

class AxiosService {
  private _axios: any;
  constructor(axios: any) {
    this._axios = axios;
  }
  async get(url: string, params: RequestParams) {
    return await this._axios.get(url, { params });
  }
}
const axiosInstance = axios.create();
const axiosService = new AxiosService(axiosInstance);
export default axiosService;
