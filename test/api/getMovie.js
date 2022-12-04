const axios = require('axios')

exports.handler = async function (event) {

    const options = JSON.parse(event.body)

    console.log(options)
    const { title, method, body } = options
    const { data } = await axios({
        url: `https://www.omdbapi.com?apikey=${process.env.VUE_APP_API_KEY}&s=${title}`,
        method,
        data: body,
    })
    return {
        statusCode: 200,
        body: JSON.stringify(data),
    }
}
