// const path = require("path");
// const express = require("express");
// const app = express();
// const publicPath = path.join(__dirname, "..", "public");
// const port = process.env.PORT || 3000;
// app.use(express.static(publicPath));
// app.get("*", (req, res) => {
//   res.sendFile(path.join(publicPath, "index.html"));
// });
// app.listen(port, () => {
//   console.log("Server is up!");
// });
// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static('client/build'));

//     const path = require('path');
//     app.get('*', (req,res) => {
//         res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
//     })

//   }

const express = require("express");
const app = express();
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
