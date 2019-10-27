// @ts-check
const net = require('net');
const delay = exec => setTimeout(exec, 1000)

export async function sendSms(to, msg, host = '192.168.1.1', post = 8091) {
    return new Promise((resolve,  reject) => {
        var client = new net.Socket();
        client.connect(post, host, function() {
            console.log('Connected');
            delay(() => {
                client.write('AT+CMGF=1\r')

                delay(() => {
                    client.write('AT+CMGS=\"' + to + '\"\r')

                    delay(() => {
                        client.write(msg + '\r')

                        delay(() => {
                            client.write(new Buffer[0x1a]);
                            client.write('\x1A')
                            client.destroy()
                            resolve()
                        })
                    })
                })
            })
        });
    
        client.on('error', function(error) {
            console.log('Error: ' + error);
            reject(error)
        });
    
        client.on('close', function() {
            console.log('Connection closed');
        });
    })
}