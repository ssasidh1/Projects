import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
export const totalLots=6;
export const condition:{[key:string]:string[]}={
    "A":["used","used","used","used","used","used","used","used","used"],
    "B": ["free","free","free","free","free","free","free","used","used"],
    "C": ["free","free","free","free","free","free","free","used","used"]
}

// Create service client module using ES6 syntax.

// Set the AWS Region.
const REGION = "us-west-1"; //e.g. "us-east-1"
// Create an Amazon DynamoDB service client object.
const ddbClient = new DynamoDBClient({ region: REGION });
export function credify(){
    process.env.AWS_ACCESS_KEY_ID = "AKIA3DC6ILKDZTWY7KPF" ;
    process.env.AWS_SECRET_ACCESS_KEY="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";
}
export { ddbClient };