import { Octokit } from "@octokit/rest";

// Store all tokens in an array
const tokens = [
    import.meta.env.VITE_GITHUB_TOKEN_1,
    import.meta.env.VITE_GITHUB_TOKEN_2,
    import.meta.env.VITE_GITHUB_TOKEN_3
];

let tokenIndex = 0;

// Function to get the next available Octokit instance with a rotated token
const getOctokit = () => {
    const token = tokens[tokenIndex];
    tokenIndex = (tokenIndex + 1) % tokens.length;  // Rotate to the next token
    
}