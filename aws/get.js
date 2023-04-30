import { DynamoDBClient, ScanCommand } from "@aws-sdk/client-dynamodb"
// Set the parameters


export const run = async () => {
    const params = {
        TableName: "CAR", //TABLE_NAME
    };
   
    process.env.AWS_ACCESS_KEY_ID = "AKIA3DC6ILKDZTWY7KPF";
    process.env.AWS_SECRET_ACCESS_KEY = "21ZgzrQ7X/z5TB+ig9BgB92xHRNwz1U2x8AqQItx";   
    // Set the AWS Region.
    const REGION = "us-west-1"; //e.g. "us-east-1"
    // Create an Amazon DynamoDB service client object.
    const ddbClient = new DynamoDBClient({ region: REGION });
   
    const data = await ddbClient.send(new ScanCommand(params));


    data.Items.forEach(element => {
        console.log(element)

    });
};
