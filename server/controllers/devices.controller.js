const Device  = require("..models/DeviceModel.js");

exports.deleteDevice=(req, res) =>{
    Device.delete(+req.params.id);
    // res.send(Device.getAll());
}