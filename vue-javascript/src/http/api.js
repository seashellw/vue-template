import { get } from "@/http/fetch.js";

const urls = (() => {
  if (import.meta.env.VITE_MOTD === "dev")
    return {
      toolsTopSearch: "https://app.seashellw.world/server/api/tools/top-search",
    };
  else
    return {
      toolsTopSearch: "http://1.1.1.1/proxy?key=tools-top-search",
    };
})();

export const toolsTopSearch = (data) => get(urls.toolsTopSearch, data);
