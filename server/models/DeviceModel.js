// let devices = [
//     { id: 1,name: 'Samsung A50',brand: 'Samsung', description: 'cool devices', price: 500,
//     },
//     {id: 2, name: 'Iphone 8',brand: 'Apple',description: 'not good ', price: 500,
//     },

//     {id: 3, name: 'Iphone 10', brand: 'Apple', description: 'sdgbvs', price: 700,
//     },
//     {id: 4,name: 'Nokia 3310', brand: 'Nokia', description: 'awesome', price: 5000,
//     },
//     {id: 5, name: 'Huawei p40', brand: 'Huawei',description: 'not bad', price: 300,
//     }
// ]
// module.exports = class Device {

//     constructor(device) {
//         this.id = device.id;
//         this.name = device.name;
//         this.brand = device.brand;
//         this.description = device.description;
//         this.price = device.price;
//     }
//     save() {
//         devices.push(this);
//     }
//     static delete(id) {
//         devices = devices.filter((device) => device.id !== id)
//     }
//     static getAll(){
//         return devices
//     }
// }