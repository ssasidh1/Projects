
// Import required AWS SDK clients and commands for Node.js
import { PutItemCommand } from "@aws-sdk/client-dynamodb";
import { ddbClient,credify} from "./config.js";

// Set the parameters
credify();
export const params = {
  TableName: "CAR",
  Item: {
   lotId:{S:"AAB"},
   Status:{S:"active"}
  },
};

export const run = async () => {
  try {
    const data = await ddbClient.send(new PutItemCommand(params));
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
};
run();