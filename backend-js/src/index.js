const { setup } = require('./config')
const db = require('./config/database')

const app = setup()

db.sync({ logging: false })
  .then(() => {
    app.listen(3000, () => {
      console.log('Server is running on port 3000')
    })
  })
  .catch(console.error)
