const dotenv = require('dotenv')
const axios = require('axios')
dotenv.config()
const { VUE_APP_API_KEY } = process.env

exports.handler = async function (event) {
  const options = JSON.parse(event.body)
  const { id, method, body } = options
  const { data } = await axios({
    url: `https://www.omdbapi.com?apikey=${VUE_APP_API_KEY}&i=${id}&plot=full`,
    method,
    data: body,
  })
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  }
}
