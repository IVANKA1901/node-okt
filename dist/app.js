const express = require("express");
const app = express();
app.get("/", function (req, res) {
    res.send("Hello world");
});
app.listen(4000, () => {
    console.log(`Server running. Use our API on port: 4000`);
});
//# sourceMappingURL=app.js.map