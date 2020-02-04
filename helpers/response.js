module.exports = async (res, status, message='Operation successful', data=[], code=200) => {
    return await res.status(code).json({
      status: status,
      code: code,
      data: data,
      message: message
    });
  }