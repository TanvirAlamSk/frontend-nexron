import { User } from "@/app/interface/user";

export const registration = async (data: User) => {
  try {
    const response = fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return (await response).json();
  } catch (err: any) {
    return Error(err);
  }
};
