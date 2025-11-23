const app = require('./app')
const PORT = 4000;


app.listen(PORT , () => {
    console.log(`Server Started At http://localhost:${PORT}`)
})