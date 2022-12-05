const axios = require("axios");
exports.handler = async function (event) {

    const options = JSON.parse(event.body)

    console.log(options)
    const { title } = options
    const { data } = await axios({
        url: `https://www.omdbapi.com?apikey=${process.env.VUE_APP_API_KEY}&s=${title}`,
    })
    return {
        statusCode: 200,
        body: JSON.stringify(data),
    }
}
