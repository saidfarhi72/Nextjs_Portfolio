"use server"
import axios from 'axios';
import cheerio from 'cheerio';

interface MetadataResponse {
  title: string;
  image: string;
  url : string;
  description: string;
  author?: string;
}

export async function fetchMediumMetadata(url: string): Promise<MetadataResponse> {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const title = $('meta[property="og:title"]').attr('content') || $('title').text() || 'No title found';
    const image = $('meta[property="og:image"]').attr('content') || '/default-image.png';
    const description = $('meta[property="og:description"]').attr('content') || 'No description found';
    const author = $('meta[name="author"]').attr('content') ;


    return { title, image,url,author,description };
  } catch (error) {
    throw new Error('Failed to fetch metadata');
  }
}
