import User from '../../models/User'
import {ResponseUsers} from '../../models/utils/Response';

export default async() => {
    return new ResponseUsers({status: 200, success: true,message: 'Successful fetch', users: await User.find({})})
}