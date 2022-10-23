import _ from "lodash";

export function paginate(movies, currentPage, pageSize) {
  // 1
  // 1: pageSize
  // 2
  // (2 - 1) * pageSize: 2 * pageSize
  return _(movies)
    .slice((currentPage - 1) * pageSize, currentPage * pageSize)
    .value();
}
