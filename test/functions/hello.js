exports.handler = async function () {
    return {
        statusCode: 200,
        body: JSON.stringify({
            name: 'DEVRAPHY',
            email: 'devraphy@gmail.com'
        })
    }
}