import axios from "axios";
const Connection = async (
  URI:string,
  method = "GET",
  body:object,
  params:object,
  Type = "application/json"
) => {
  var UrlBase = "";
  return await axios(UrlBase, {
    method: method,
    headers: {
      "Content-Type": Type,
      Authorization: "Bearer " + global.localStorage.token,
    },
    params: {
      ...params,
    },
    data: body,
  });
};


export const HttpRequest = async (
  method = "GET",
  URI:string,
  body:object,
  params:object,
  Type:any
) => {
  var data:any = [];
  try {
    data = await Connection(URI, method, body, params, Type);
    return ExposeData({ datas: data });
  } catch (e:any) {
    const data = { status: e.response.status, data: null };
  }
  return data;
};

const ExposeData = ({ datas }:any) => {
  const { data, status } = datas;
  if (data.data !== undefined) {
    return data.data;
  } else {
    return data.item;
  }
};