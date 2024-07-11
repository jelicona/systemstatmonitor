const {getSystemInfo} = require('../services/systeminfo.service')

const systemInfo = async (req, res) => {

    const systemInfo = await getSystemInfo();
    res.send(systemInfo);
}

module.exports = {systemInfo}