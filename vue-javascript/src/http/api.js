import { get } from "@/http/fetch.js";

const urls = {};

if (import.meta.env.VITE_MOTD === "dev") {
  urls.toolsTopSearch =
    "https://app.seashellw.world/server/api/tools/top-search";
} else {
  urls.toolsTopSearch = "https://api.example.com";
}

export const toolsTopSearch = (data) => get(urls.toolsTopSearch, data);
