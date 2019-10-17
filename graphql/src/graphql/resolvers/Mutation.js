import User from '../../models/User'

export const Mutation = {
  createUser: async (_, {data}) => {
    try {
      const user = await User.create({ ...data })
      return {status: 200, success: true, message: "Successful creation", user }  
    } catch(e){
      return {status: e.status || 400, success:false, message: e.message }
    }
  },
  updateUser: async (_, {data, where}) => {
    try {
      const user = await User.findOneAndUpdate({...where}, {...data},{new: true})
      if(!user) throw new Error('user not found')

      return {status: 200, success: true, message: "Successful update", user}
    } catch(e){
      return {status: e.status || 400, success:false, message: e.message }
    }
  },
  deleteUser: async (_, {where}) => {
    try{
      const user = await User.findOneAndRemove({...where}, {new: true})
      if(!user) throw new Error('user not found')
  
      return {status: 204, success: true, message: 'Successful deletion'}
    } catch(e){
      return {status: e.status || 400, success:false, message: e.message}
    }
  },
}