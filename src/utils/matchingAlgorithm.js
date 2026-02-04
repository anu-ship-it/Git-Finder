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
    return new Octokit({ auth: token });
};

// Add new constants
const RATE_LIMIT_DELAY = 1000; // 1 second base delay
const MAX_RETRIES = 3;
const EVENT_WEIGHT = {
    PushEvent: 1.0,
    PullRequestEvent: 1.2,
    IssuesEvent: 0.8,
    CreateEvent: 0.6,
    // ... add other event types as needed
};
const GENDER_PERFERENCE_WEIGHT = 0.2, // How much gender preference affects overall score
