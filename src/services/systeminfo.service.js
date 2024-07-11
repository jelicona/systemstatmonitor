const si = require('systeminformation');

const getSystemInfo = async () => {
    const data = {
        cpu: '*',
        osInfo: 'platform, release',
        system: 'model, manufacturer, version, serial',
        mem: 'total, free',
      }
      
    console.log(data)
    return si.get(data);;
}

module.exports = {getSystemInfo}