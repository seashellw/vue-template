import { ofetch } from "ofetch";
import { ElMessage } from "element-plus";

export const request = async (url, options) => {
  try {
    const res = await ofetch(url, {
      ...options,
      onRequest(context) {
        context.options.headers = {
          ...context.options.headers,
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        };
      },
    });
    return {
      ok: true,
      data: res,
    };
  } catch (e) {
    if (e.statusCode === 404) {
      ElMessage.error("404 Not Found");
    } else {
      ElMessage.error(e.data);
    }
    return {
      ok: false,
      data: e.data,
    };
  }
};

export const get = (url, query) =>
  request(url, {
    method: "GET",
    query,
  });

export const post = (url, body) =>
  request(url, {
    method: "POST",
    body,
  });
