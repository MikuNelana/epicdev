const ObjectResponse = (status, data = null, message = null, extra) => {
    return {
      status: status,
      data: data,
      message: message,
      extra
    }
  }
  
  module.exports = ObjectResponse
  