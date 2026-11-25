const ENTRY = "My chart waits until I sell to pump \u2014 I finally found a relationship where I'm the one getting dumped.";

if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${ENTRY.length}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}

await import("node:fs/promises").then(async ({ mkdir, writeFile }) => {
  await mkdir("/output", { recursive: true });
  await writeFile("/output/entry.txt", ENTRY, "utf8");
});

console.log(ENTRY);
console.log(`characters: ${ENTRY.length}`);
