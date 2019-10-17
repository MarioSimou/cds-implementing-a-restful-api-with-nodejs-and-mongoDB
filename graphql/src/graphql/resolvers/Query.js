import User from '../../models/User'

export const Query = {
  users: async () => {
    try {
      return {status: 200, success:true, message: "Successful query", users: await User.find({})}
    } catch(e){
      return {status: e.status || 400, success:false, message: e.message}
    }
  },
  user: async (_, {where}) => {
    try {
      const user = await User.findOne({...where})
      if(!user) throw new Error("The user not found")
      
      return {status: 200, success:true, message: "Successful query", user}
    } catch(e){
      return {status: e.status || 400, success:false, message: e.message}
    }
  }
}