export interface ArtData {
  id: number;
  title: string;
  image_id: string;
  is_public_domain: boolean;
  artist_title: string;
  date_start?: number;
  date_end?: number;
  dimensions?: string;
  credit_line?: string;
  provenance_text?: string;
  place_of_origin?: string;
}

export default class ArtService {
  static async getAll(page: number = 1): Promise<ArtData[]> {
    const response = await fetch(
      `https://api.artic.edu/api/v1/artworks/search?q=paint&page=${page}&limit=3&fields=id,title,image_id,is_public_domain,artist_title`
    );
    const data = await response.json();
    return data.data as ArtData[];
  }

  static async getOthers(): Promise<ArtData[]> {
    const response = await fetch(
      `https://api.artic.edu/api/v1/artworks/search?q=cat&page=1&limit=9&fields=id,title,image_id,is_public_domain,artist_title`
    );
    const data = await response.json();
    return data.data as ArtData[];
  }

  static async getBySearchQuery(query: string): Promise<ArtData[]> {
    const response = await fetch(
      `https://api.artic.edu/api/v1/artworks/search?q=${query}&page=1&limit=9&fields=id,title,image_id,is_public_domain,artist_title`
    );
    const data = await response.json();
    return data.data as ArtData[];
  }

  static async getById(id: number): Promise<ArtData> {
    const response = await fetch(
      `https://api.artic.edu/api/v1/artworks/${id}?fields=id,title,image_id,is_public_domain,artist_title,date_start,date_end,dimensions,credit_line,provenance_text,place_of_origin`
    );
    if (!response.ok) {
      throw new Error(`Artwork with ID ${id} not found. Status: ${response.status}`);
    }
    const data = await response.json();
    return data.data as ArtData;
  }
}
