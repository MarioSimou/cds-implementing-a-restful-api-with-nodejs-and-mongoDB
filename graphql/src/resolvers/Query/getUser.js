import User from "../../models/User";
import { ResponseUser } from "../../models/utils/Response";
import { NotFound } from "../../models/utils/Errors";

export default async (_, { query }) => {
  try {
    const user = await User.findOne({ ...query });
    if (!user) throw new NotFound("User not found");
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
