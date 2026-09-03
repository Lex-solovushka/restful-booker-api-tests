import fs from "node:fs";
const collectionPath = new URL("../postman/Restful-Booker.postman_collection.json", import.meta.url);
const collection = JSON.parse(fs.readFileSync(collectionPath, "utf8"));
if (collection.info?.schema !== "https://schema.getpostman.com/json/collection/v2.1.0/collection.json") throw new Error("Collection schema must be v2.1.0");
const leaves = [];
const walk = (items) => items.forEach((item) => item.item ? walk(item.item) : leaves.push(item));
walk(collection.item || []);
const cases = leaves.filter((item) => /^\[[A-Z]/.test(item.name) && !item.name.startsWith("[SETUP]"));
const ids = cases.map((item) => item.name.match(/^\[([^\]]+)]/)?.[1]);
if (ids.some((id) => !id)) throw new Error("Every test request must start with [TEST-ID]");
if (new Set(ids).size !== ids.length) throw new Error("Duplicate test IDs found");
for (const item of cases) {
  if (!item.request?.method || !item.request?.url) throw new Error("Incomplete request: " + item.name);
  const test = item.event?.find((event) => event.listen === "test");
  if (!test?.script?.exec?.length) throw new Error("No Tests script: " + item.name);
}
console.log("Validated " + cases.length + " test requests and " + (leaves.length - cases.length) + " setup/cleanup requests.");
