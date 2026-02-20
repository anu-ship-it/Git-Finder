import React from "react";
import { FaSpinner } from "react-icons/fa";

function BuddyList({ buddies, loading }) {
    const handleBuddyClick = (buddy) => {
        window.open(`https://github.com/${buddy.login}`, `_blank`);
    };

    if (loading) {
        return (
            <div className="buddy-list-loading">
                <FaSpinner className="spinner" />
                <p>Finding your true buddies... This may take a few moments💖</p>
            </div>
        );
    }

    return (
        
    )
}