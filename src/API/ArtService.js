export default class ArtService{
    static async getAll(){
        const response = await fetch(
            "https://api.artic.edu/api/v1/artworks?page=1&limit=3&fields=id,title,image_id,is_public_domain,artist_title"
          );
          const data = await response.json();
          return data.data
    }
}