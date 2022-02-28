module.exports = {
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/npm",
    [
      "@semantic-release/github",
      {
        assets: [
          "dist",
          "docs",
          "package.json",
          "package-lock.json",
          "README.md",
        ],
      },
    ],
    [
      "@semantic-release/git",
      { assets: ["dist", "docs", "package.json", "package-lock.json"] },
    ],
  ],
};
