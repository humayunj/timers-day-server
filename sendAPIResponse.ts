import { Response } from "express";

export default function sendAPIResponse(
  res: Response,
  { data, error }: { data?: any; error?: any }
) {
  return res.json({
    statusCode: res.statusCode,
    data: data,
    error: error,
  });
}
