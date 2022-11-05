

import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Experience } from "../../typings";

const query = groq`
    *[_type == 'experience'] {
      ...,
      technologies[]->
    }
`;

type Data = {
    experiences: Experience[];
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const experiences: Experience[] = await sanityClient.fetch(query);
    res.status(200).json({ experiences })
  }
  