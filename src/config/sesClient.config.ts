import { SESClient, SESClientConfig } from "@aws-sdk/client-ses";
import getConfig from "./base.config";

const SESrequirements: [string] = ["AWS_REGION"];
const SESConfig = getConfig<SESClientConfig>(SESrequirements);

export default new SESClient(SESConfig);
