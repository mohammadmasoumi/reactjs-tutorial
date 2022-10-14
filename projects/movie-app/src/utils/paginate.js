import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize

    // lodash object
    // _(items)

    // object list
    // .value()

    return _(items).slice(startIndex).take(pageSize).value();
}