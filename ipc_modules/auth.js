const ipc = require('electron').ipcMain;
const request = require('request');

///IPC Methods
ipc.on('auth', (event, { host, name, password }) => {
    request.get(`${host}/user name ${name}`, { forever: true }, function(err, response, body) {
        if (err) event.sender.send('err', { msg: err });
        request.get(`${host}/password ${password}`, { forever: true }, function(err, response, body) {
            if (err) event.sender.send('err', { msg: err });
            if (body.trim() === 'USER AUTHENTICATED') {
                request.get(`${host}/userlist`, { forever: true }, function(err, response, body) {
                    var userlist = body
                        .replace('\r', '')
                        .split('\n')
                        .map(list => {
                            if (list) {
                                var listSplitted = list.split(' - ');
                                return { id: listSplitted[0], name: listSplitted[1].replace('\r', '') };
                            }
                            return { id: '', name: '' };
                        });
                    const user = userlist.filter(user => user.name === name);
                    event.returnValue = { userid: user[0].id, msg: 'USER AUTHENTICATED' };
                });
            }
        });
    });
});

ipc.on('get-proc-id', event => {
    host = 'http://71.29.164.239:8181';

    request.get(`${host}/proclist`, { forever: true }, function(err, response, body) {
        event.sender.send('get-proc-id-response', body);
    });
});
