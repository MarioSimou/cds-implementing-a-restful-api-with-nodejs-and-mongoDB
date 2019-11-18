import User from "../../models/User";
import { ResponseUser } from "../../models/utils/Response";

export default async (_,{query}) => {
  try {
    const user = await User.findOne({ ...query });
    console.log('USER: ', user)
    if (!user) throw new Error("User not found");
    return new ResponseUser({
      status: 200,
      success: true,
      message: "Successful fetch",
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
