import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import ProfileDisplay from './components/ProfileDisplay';
import LanguageChart from './components/LanguageChart';
import ActivityChart from './components/ActivityChart';
import BuddyList from './components/BuddyList';
import useGitHubApi from './hooks/useGitHubApi';
import { FaGithub, FaTwitter, FaCoffee, FaMoon, FaSun, FaSearch, FaUsers, FaCode } from 'react-icons/fa';
import LoadingSpinner from './components/LoadingSpinner';

function App() {
    const [searchTerm, setSearchTerm] = useState('');
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('darkMode') === 'true';
    });
    const { userData, buddies, languages, activities, loading, buddiesLoading, error } = useGitHubApi(searchTerm);

    useEffect(() => {
        document.body.classList.toggle('dark-mode', darkMode),
        localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);

    
}