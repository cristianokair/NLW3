import Image from "../models/Image";

export default {
  render(image: Image) {
    const encoded_url = encodeURI(image.path);
    return {
      id: image.id,
      url: `http://localhost:3333/uploads/${encoded_url}`,
    };
  },

  renderMamy(images: Image[]) {
    return images.map((image) => this.render(image));
  },
};
