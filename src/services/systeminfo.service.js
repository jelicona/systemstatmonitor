const si = require('systeminformation');

const getSystemInfo = async (user) => {
    const data = await si.system();
    return data;
}

module.exports = {getSystemInfo}