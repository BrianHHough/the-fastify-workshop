
// returns list of user names
export default async function (app) {
    app.get('/users', async function () {
        return {
            user: ['a user']
        }
    })
}
