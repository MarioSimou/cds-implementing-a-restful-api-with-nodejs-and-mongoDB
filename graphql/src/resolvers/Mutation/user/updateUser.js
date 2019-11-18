import User from "../../../models/User";
import { ResponseUser } from "../../../models/utils/Response";

export default async (_, { query, data }) => {
  try {
    const user = await User.findOneAndUpdate(
      { ...query },
      { ...data },
      { new: true }
    );
    if (!user) throw new Error("User does not exist");
    return new ResponseUser({
      status: 200,
      success: true,
      message: "Successful update",
      user: user
    });
  } catch (e) {
    return new ResponseUser({
      status: e.status || 400,
      success: false,
      message: e.message
    });
  }
};
