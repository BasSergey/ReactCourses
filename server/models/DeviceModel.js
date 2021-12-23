let devices = [
    {
        id: 1,
        name: 'Suslik A50',
        brand: 'Suslik',
        description: 'cool devices',
        price: 500,
    },
    {
        id: 2,
        name: 'Suslik 8',
        brand: 'Suslik',
        description: 'not good ',
        price: 500,
    },
    
    {
        id: 3,
        name: ' Suslik 10',
        brand: 'Suslik',
        description: 'sdgbvs',
        price: 700,
    },
    {
        id: 4,
        name: 'Suslik 3310',
        brand: 'Suslik',
        description: 'awesome',
        price: 1000,
    },
    {
        id: 5,
        name: 'Suslik p20',
        brand: 'Suslik',
        description: 'good',
        price: 300,
    }
]
module.exports=class Device{
    constructor(device){
        this.id = device.id;
        this.name = device.name;
        this.brand = device.brand;
        this.description = device.description;
        this.price = device.price;        
    }
    save(){
        devices.push(this);
    }
    static delete(id){
        devices = devices.filter((device)=>device.id !== id)
    }
    // static getAll(){
    //     return devices
    // }
}