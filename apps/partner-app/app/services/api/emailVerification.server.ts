import { isAxiosError } from "axios";
import { AxiosInstance } from "~/utils/axios.utils";

export async function EmailVerification({
  verificationEmail,
  verificationCode,
}: {
  verificationEmail: string;
  verificationCode: string;
}) {
  try {
    const bodyData = new FormData();
    bodyData.append("email", verificationEmail);
    bodyData.append("verificationCode", verificationCode);

    const { data } = await AxiosInstance.post("/validate-email", bodyData, {
      headers: {
        "COMPANY-CODE": process.env.ADMIN_COMPANY_CODE,
        "Content-Type": "multipart/form-data",
        "FRONTEND-KEY": "XXX",
      },
    });

    return data;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      return error.response?.data;
    }

    return { error: "Error", msg: "Request failed" };
  }
}
