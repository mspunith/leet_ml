import { setProblemHidden } from "./probelms";
import { submission } from "./submission";
import { sendMail, verifyEmail } from "./verifyemail";

export const server = {
    verifyEmail,
    sendMail,
    submission,
    setProblemHidden

}