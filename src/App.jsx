import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import ProfileDisplay from './components/ProfileDisplay';
import LanguageChart from './components/LanguageChart';
import ActivityChart from './components/ActivityChart';
import BuddyList from './components/BuddyList';
import useGitHubApi from './hooks/useGitHubApi';
import { FaGithub, FaTwitter, FaCoffee, FaMoon, FaSun, FaSearch, FaUsers, FaCode } from 'react-icons/fa';
import LoadingSpinner from './components/LoadingSpinner';

