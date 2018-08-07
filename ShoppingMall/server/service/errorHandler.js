module.exports = (ctx, next) => {
    return next().catch((err) => {
      if (err.status === 401) {
        ctx.status = 401;
        ctx.body = {
            code:1000,
            message:"登陆失效"
        };
      } else {
        throw err;
      }
    });
  }
  