import { ofetch } from "ofetch";
import { ElMessage } from "element-plus";

export const request = async (url, options) => {
  try {
    const res = await ofetch(url, options);
    return {
      ok: true,
      data: res,
    };
  } catch (e) {
    if (e.statusCode === 404) {
      ElMessage.error("404 Not Found");
    }
    return {
      ok: false,
      error: e,
    };
  }
};

export const get = async (url, query) =>
  await request(url, {
    method: "GET",
    query,
  });

export const post = async (url, body) =>
  await request(url, {
    method: "POST",
    body,
  });
