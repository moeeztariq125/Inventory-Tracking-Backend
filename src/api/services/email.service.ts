import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { AppLogger, loggerEnums } from "../../utils/logger";

class EmailServiceClass {
  constructor(private readonly emailClient: SESClient) {}
  async sendTextEmail(toAddress: string, message: string, Subject: string) {
    const sendEmailCommand = new SendEmailCommand({
      Destination: {
        ToAddresses: [toAddress]
      },
      Message: {
        Body: {
          Html: {
            Charset: "UTF-8",
            Data: "HTML_FORMAT_BODY"
          },
          Text: {
            Charset: "UTF-8",
            Data: "TEXT_FORMAT_BODY"
          }
        },
        Subject: {
          Charset: "UTF-8",
          Data: "EMAIL_SUBJECT"
        }
      },
      Source: "example@example.com"
    });
    try {
      return await this.emailClient.send(sendEmailCommand);
    } catch (caught) {
      // AppLogger.error(loggerEnums.)
      if (caught instanceof Error && caught.name === "MessageRejected") {
        /** @type { import('@aws-sdk/client-ses').MessageRejected} */
        const messageRejectedError = caught;
        return messageRejectedError;
      }
      throw caught;
    }
  }
}
