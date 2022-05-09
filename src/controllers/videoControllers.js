export const trending = (req, res) => res.send("<h1>Hello</h1>");
export const watch = (req, res) => {
  console.log(req.params);
  res.send(`Watch Video #${req.params.id}`);
};
export const edit = (req, res) => {
  return res.send("Edit");
};
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("upload");
export const deleteVideo = (req, res) => {
  return res.send("deleteVideo");
};
