/**
 * 为分页的列表项添加序号
 */
export const addPageIndex = (list, current, pageSize) => {
  list.forEach((item, index) => {
    item.index = index + 1 + (current - 1) * pageSize;
  });
  return list;
};
