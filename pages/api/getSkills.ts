

import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Skill } from "../../typings";

const query = groq`
    *[_type == 'skill']
`;

type Data = {
    skills: Skill[];
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const skills: Skill[] = await sanityClient.fetch(query);
    res.status(200).json({ skills })
  }
  