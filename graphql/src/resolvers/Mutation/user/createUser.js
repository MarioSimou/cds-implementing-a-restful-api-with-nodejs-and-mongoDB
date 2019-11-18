import { ResponseUser } from "../../../models/utils/Response";
import User from "../../../models/User";

export default async (_, { data }) => {
  try {
    const user = await User.create({ ...data });
    return new ResponseUser({
      status: 201,
      success: true,
      message: "Successful creation",
      user
    });
  } catch (e) {
    return new ResponseUser({
      status: e.status || 400,
      success: false,
      message: e.message
    });
  }
};
