import { UNAUTHORIZED } from '../constants/httpStatus.js';
import auth from './auth.mid.js';

const admin = (req, res, next) => {
  if (!req.user || !req.user.isAdmin) {
    return res.status(UNAUTHORIZED).json({message: "access denied"});
  }

 next();
};

export default [auth, admin];