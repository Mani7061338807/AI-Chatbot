import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { COOKIE_NAME } from "./constants.js";

export const createToken = (id: string, email: string, expiresIn: string) => {
  const payload = { id, email };
  const token = jwt.sign(payload, process.env.JWT_SECRET || 'ashgkgkhaoihhgn', {
    expiresIn,
  });
  return token;
};

// export const verifyToken = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   const token = req.signedCookies[`auth-token`];
//   if (!token || token.trim() === "") {
//     return res.status(401).json({ message: "Token Not Received" });
//   }
//   return new Promise<void>((resolve, reject) => {
//     return jwt.verify(token, process.env.JWT_SECRET || '', (err:any, success:any) => {
//       if (err) {
//         reject(err.message);
//         return res.status(401).json({ message: "Token Expired" });
//       } else {
//         resolve();
//         res.locals.jwtData = success;
//         return next();
//       }
//     });
//   });
// };
export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.signedCookies[`auth_token`];

    if (!token || token.trim() === "") {
      return res.status(401).json({ message: "Token Not Received" });
    }

    const jwtSecret = process.env.JWT_SECRET || 'ashgkgkhaoihhgn';

    jwt.verify(token, jwtSecret, (err: any, success: any) => {
      if (err) {
        return res.status(401).json({ message: "Token Expired" });
      } else {
        res.locals.jwtData = success;
        return next();
      }
    });
  } catch (error) {
    console.error("Error in verifyToken:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
