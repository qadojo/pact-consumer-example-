const { Publisher } = require("@pact-foundation/pact");
const path = require("path");
const package = require("../package.json");

new Publisher({
  pactBroker: "http://localhost:9292",
  consumerVersion: package.version,
  pactFilesOrDirs: [path.join(__dirname, "..", "pacts")],
}).publishPacts();
