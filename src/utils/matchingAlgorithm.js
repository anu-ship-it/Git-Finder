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
const GENDER_PERFERENCE_WEIGHT = 0.2; // How much gender preference affects overall score
const LANGUAGE_WEIGHT = 0.2; // Reduced to 20%
const ACTIVITY_WEIGHT = 0.2; // Reduced to 20%
const DEFAULT_GENDER_RATIO = 0.7; // Percentage of opposite gender recommendations

// Update constants with latest demographics and weights
const DEMOGRAPHICS = {
    MALE_RATIO: 0.667,  // 66.7% male
    FEMALE_RATIO: 0.333 // 33.3% female
};

const WEIGHTS = {
    GENDER: 0.8,    // 80% weight for gender
    LANGUAGE: 0.1,  // 10% weight for language
    ACTIVITY: 0.1   // 10% weight for activity
};

// 