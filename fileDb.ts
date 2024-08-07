import {promises as fs} from "fs";
import {randomUUID} from "crypto";
import {IProduct, ProductWithoutId} from "./types";


const fileName = "./db.json";
let data:IProduct[] = [];

const fileDb = {
    async init(){
        try{
            const fileContents =  await fs.readFile(fileName);
            data = JSON.parse(fileContents.toString());
        }catch(e){
            data = []
        }
    },
    async getItems(){
        return data
    },
    async addItem(item: ProductWithoutId){
        const product:IProduct = {
            ...item,
            id:randomUUID()
        }
        data.push(product);
        await this.save();
        return product

    },
    async save(){
        await fs.writeFile(fileName, JSON.stringify(data));
    }
}

export default fileDb;