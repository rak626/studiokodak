import {PreparedMessageInput} from "@/util/type";

export const getPreparedMessage = ({
                                       name,
                                       email,
                                       phone,
                                       message,
                                   }: PreparedMessageInput): string => {
    return `
Hello Studio Kodak,

I’d like to enquire about a photography shoot. Please find my details below:

Name: ${name}
Email: ${email || "N/A"}
Phone: ${phone}

Shoot Details:
${message}

Looking forward to your response.
Thank you.
`.trim();
};
