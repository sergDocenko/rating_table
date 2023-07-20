import httpServise from "../HTTP";
import { RequestParams } from "../../types";

const baseURL = "api/users";

export async function fetchUsers(params?: RequestParams) {
  const response = await httpServise.get(baseURL, params);
  return response.data;
}
