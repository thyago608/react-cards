import { NextApiRequest, NextApiResponse } from "next";
import { pexels } from "services/pexels";
import { Card } from "types/card";
import { randomNumbersList } from "utils/randomNumber";
import { PhotoPexelsUpdated } from "types/pexels";

export default async function (
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (request.method === "GET") {
    const search = "animals";

    const { query } = request;
    let card: Card[] = [];
    let error = false;

    try {
      const data = await pexels.photos.search({
        query: search,
        page: Number(query.page),
        per_page: 5,
      });

      if ("photos" in data) {
        const photosLength = data.photos.length > 0 ? data.photos.length : 0;

        if (photosLength > 0) {
          card = data.photos.map((photo: PhotoPexelsUpdated) => {
            return {
              id: photo.id,
              title: photo.photographer,
              image: photo.src.large2x,
              description: String(photo.alt),
              point: 0,
            };
          });

          card.splice(1, card.length);
        }
      }
    } catch (e) {
      error = true;
    }

    return response.status(201).json({ card: card[0], error });
  } else {
    response.setHeader("Allow", "GET");
    response.status(405).end("Method not allowed");
  }
}
