const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3000
const atServerIp = '192.168.1.1';
const atServerPort = 8091;

app.use(bodyParser.json())
app.get('/', (_, res) => res.send('Hello SMS Server!'))
app.post('/sms', async (req, res) => {
    const { to, msg } = req.body || {}
    try {
        await sendSms(to, msg, atServerIp, atServerPort)
        res.json({
            success: true,
            to,
        })
    } catch(error) {
        res.json({
            success: false,
            to,
        })
    }
})

app.listen(port, () => console.log(`App listening on port ${port}!`))