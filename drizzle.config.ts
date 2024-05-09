import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config();
 
export default {
  schema: "./schema/*",
  out: "./drizzle",
  driver: 'pg',
  dbCredentials: {
    host: "ep-falling-sound-a14b3thc-pooler.ap-southeast-1.aws.neon.tech",
    database: "verceldb",
    connectionString: "postgres://default:79BDCyZPscYU@ep-falling-sound-a14b3thc-pooler.ap-southeast-1.aws.neon.tech:5432/verceldb?sslmode=require"
  }
} satisfies Config;