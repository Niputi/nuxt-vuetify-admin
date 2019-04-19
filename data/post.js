const posts = [
  {
    title: "A sample post with image",
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry scrambled it to make text of the printing and typesetting industry scrambled a type specimen book text of the dummy text of the printing printing and typesetting industry scrambled dummy text of the printing.",
    featuredImage: "https://placeimg.com/640/485/nature",
    author: "Jessie Wang",
    createdAt: new Date().toLocaleDateString()
  },
  {
    title: "A sample post with image",
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry scrambled it to make text of the printing and typesetting industry scrambled a type specimen book text of the dummy text of the printing printing and typesetting industry scrambled dummy text of the printing.",
    featuredImage: "https://placeimg.com/640/490/nature",
    author: "Li Love",
    createdAt: new Date().toLocaleDateString()
  },
  {
    title: "A sample post with image",
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry scrambled it to make text of the printing and typesetting industry scrambled a type specimen book text of the dummy text of the printing printing and typesetting industry scrambled dummy text of the printing.",
    featuredImage: "https://placeimg.com/640/460/nature",
    author: "Jim Wang",
    createdAt: new Date().toLocaleDateString()
  },
  {
    title: "A sample post with image",
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry scrambled it to make text of the printing and typesetting industry scrambled a type specimen book text of the dummy text of the printing printing and typesetting industry scrambled dummy text of the printing.",
    featuredImage: "https://placeimg.com/640/470/nature",
    author: "John Doe",
    createdAt: new Date().toLocaleDateString()
  }
];

const getPost = limit => {
  return limit ? posts.slice(0, limit) : posts;
};

module.exports = {
  getPost
};
