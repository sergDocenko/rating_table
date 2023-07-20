import axiosService from "./clients/axios";
import { RequestParams } from "@/app/types";
class HTTP {
  private _client: any;
  constructor(client: any) {
    this._client = client;
  }
  async get(url: string, params: RequestParams = {}) {
    return await this._client.get(url, params);
  }
}
const httpServise = new HTTP(axiosService);
export default httpServise;
