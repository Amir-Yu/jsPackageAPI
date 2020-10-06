const paginate = (arr, page, limiter) => arr.slice(limiter * (page - 1), limiter * page);

module.exports.paginate = paginate;
