import * as fs from 'fs'
import * as path from 'path'
import { Product, ProductData } from '../types/typesProducts'

const testDataFilePath: string = path.resolve(
    __dirname,
    '../testData/products/productTshirt.json'
)

if (!fs.existsSync(testDataFilePath)) {
    throw new Error(`Test data file not found at: ${testDataFilePath}`)
}

export function getProductByName(productName: string): Product {
    const products: ProductData = JSON.parse(
        fs.readFileSync(testDataFilePath, 'utf-8')
    )

    const product: Product | undefined = products.products.find(
        (p: Product) => p.name === productName
    )

    if (!product) {
        throw new Error(
            `Product with name "${productName}" not found in the test data`
        )
    }

    return product
}
