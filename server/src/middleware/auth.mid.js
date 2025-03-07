import jwt from 'jsonwebtoken';
import {UserModel} from '../models/user.model.js';

const auth = async (req, res, next) => {

    let token;

    const authHeader = req.headers.authorization;

    console.log(authHeader);
    
    if (!authHeader || !authHeader.startsWith('Bearer')) {
        return res.status(401).json({message: 'no token again'});
    }
    
//    token = authHeader.split("")[1];
    
    // if(parts.length !==2 || parts[0] !== "Bearer") {
    //     console.log('invalid token format');
    //     return res.status(401).json({message: "invalid format"});  
    // }
    // token = parts[1];

    // payload = JSON.parse(atob(token));

    token = authHeader.startsWith("Bearer") ? authHeader.substring(6) : null;
    console.log('Extracted :', token);
    
    try {           
            const decodedToken = jwt.decode(token, {complete: true});
            const decoded = jwt.verify(token, process.env.JWT_SECRET, {
                algorithms: ["HS256"]
            }); 
            
            console.log(decoded);
            
            // req.user = decoded; 
            req.user = await UserModel.findById(decoded.id); 

            if (!req.user) {
                console.log('auth failed');
                return res.status(401).json({message: 'not auth, token failed'})};
            next();
        } catch (error) {
            console.error('Auth error:', error);
            res.status(401).json({ message: 'Not authorized, token failed' });
        }
};

export default auth;