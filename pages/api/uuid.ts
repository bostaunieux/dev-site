import { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidV4 } from "uuid";

interface Data {
  uuid: string;
}

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const {
    query: { version = "4" },
    method,
  } = req;

  if (method === "GET") {
    const uuid = version == "4" ? uuidV4() : null;
    res.status(200).json({ uuid });
  }

  res.status(405);
};
