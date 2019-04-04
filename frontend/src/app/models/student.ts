export class Student {

    constructor(_id = '', name = '', address = '', phones = []) {
        this._id = _id;
        this.name = name;
        this.address = address;
        this.phones = phones;
    }

    _id: string;
    name: string;
    address: string;
    phones: {id: String, phone: String}[];
}
