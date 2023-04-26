import  { DynamoDBClient, ScanCommand } from "@aws-sdk/client-dynamodb"
import { ddbClient,credify} from "./config.js";

// Set the parameters
credify();
export const params = {
    TableName: "CAR", //TABLE_NAME
  };
  
  export const run = async () => {
    const data = await ddbClient.send(new ScanCommand(params));
    
    
    data.Items.forEach(element => {
        console.log(element)
        
    });
  };
  run();