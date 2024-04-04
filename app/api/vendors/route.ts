import clientPromise from "@/services/mongodb";

const database = 'production'
const collection = 'vendors'

export async function GET(_request: Request) {
    const client = await clientPromise
    const cursor = await client.db(database).collection(collection).find();
    const products = (await cursor.toArray())
    return Response.json(products)
}

export async function POST(request: Request) {
    const client = await clientPromise;
    const body = await request.json()
    await client.db(database).collection(collection).insertOne({ product: body.product });
    return Response.json({ message: "successfully updated the document" })
}
