module.exports = {
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/npm",
    ["@semantic-release/github", { assets: "dist" }],
    [
      "@semantic-release/git",
      { assets: ["dist", "package.json", "package-lock.json"] },
    ],
  ],
};
