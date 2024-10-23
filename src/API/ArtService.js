export default class ArtService {
  static async getAll(page = 1) {
    const response = await fetch(
      `https://api.artic.edu/api/v1/artworks/search?q=paint&page=${page}&limit=3&fields=id,title,image_id,is_public_domain,artist_title`
    );
    const data = await response.json();
    return data.data;
  }
  static async getOthers() {
    const response = await fetch(
      `https://api.artic.edu/api/v1/artworks/search?q=cat&page=1&limit=9&fields=id,title,image_id,is_public_domain,artist_title`
    );
    const data = await response.json();
    return data.data;
  }
  static async getBySearchQuery(query) {
    const response = await fetch(
      `https://api.artic.edu/api/v1/artworks/search?q=${query}&page=1&limit=9&fields=id,title,image_id,is_public_domain,artist_title`
    );
    const data = await response.json();
    return data.data;
  }
}
