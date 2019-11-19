import User from "../../../models/User";
import { ResponseUser } from "../../../models/utils/Response";
import { NotFound } from "../../../models/utils/Errors";

export default async (_, { query }) => {
  try {
    const user = await User.findOneAndDelete({ ...query });
    if (!user) throw new NotFound("User does not exist");
    return new ResponseUser({
      status: 204,
      success: true,
      message: "Successful deletion"
    });
  } catch (e) {
    return new ResponseUser({
      status: e.status || 400,
      success: false,
      message: e.message
    });
  }
};
