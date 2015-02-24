var btSerial = new (require('bluetooth-serial-port')).BluetoothSerialPort();

btSerial.on('found', function(address, name) {
    console.log('address found', address, name);
    if (name !== "HC-05") {
        return;
    }

    btSerial.findSerialPortChannel(address, function(channel) {
        console.log('channel found', channel);
        btSerial.connect(address, channel, function() {
            console.log('connected');

            btSerial.write(new Buffer('my data', 'utf-8'), function(err, bytesWritten) {
                if (err) console.log(err);
            });

            btSerial.on('data', function(buffer) {
                console.log(buffer.toString('utf-8'));
            });
        }, function () {
            console.log('cannot connect');
        });

        // close the connection when you're ready
        btSerial.close();
    }, function() {
        console.log('found nothing');
    });
});

btSerial.on('finish', function () {
    console.log('finished searching.');
});

btSerial.listPairedDevices(function (data) {
    console.log('paired devices', data[1].services);
});

btSerial.inquire();