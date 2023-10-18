import { HttpRequest } from "./Connection";

const apiEndpoint = "http://localhost:60968/api/Groups/Group";

const onFetchGroups = async ({}) => {
  const q = { PageSize: PageSize, PageIndex: PageIndex, ...prameter };
  return await HttpRequest("GET", apiEndpoint, q);
};

export default {
  onFetchGroups,
};
