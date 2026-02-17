import { useState, useEffect } from "react";
import { findBuddies } from '../utils/matchingAlgorithm';

const useGitHubApi = (username) => {
    const [userData, setUserData] = useState(null);
    const [buddies, setBuddies] = useState([]);
    const [languages, setLanguages] = useState(null);
    const [activites, setActivites] = useState(null);
    const [loading, setLoading] = useState(false);
    const [buddiesLoading, setBuddiesLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!username) return;

        const fetchData = async () => {
            setLoading(true);
            setBuddiesLoading(true);
            setError(null);

            try {
                // Fetch user data
                
            } catch (error) {
                
            }
        }
    })
}