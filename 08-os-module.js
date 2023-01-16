const os = require('os');

// info about current user
const user = os.userInfo();
console.log(user);


// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem(),
    a : os.homedir(),
    b : os.hostname(),
    c : os.machine(),
    d : os.platform(),
    e : os.release(),
    f : os.tmpdir(),
    g : os.version()
}

console.log(currentOS);
