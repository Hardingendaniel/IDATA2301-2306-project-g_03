import React, {useEffect, useState} from "react";
import {asyncApiRequest} from "../../tools/requests";


const handleToggleFavorite = async (id) => {
    try {
        const response = await asyncApiRequest("PUT", `/favorites/${id}`);
        if (response.ok) {
            alert("Added/removed successfully!");
        } else {
            alert("Failed to add/remove. Please try again.");
        }
    } catch (error) {
        console.log("An error occurred while adding to favorites", error.message);
    }
};

const ToggleFavorites = ({id}) => {
    return (
        <button onClick={() => handleToggleFavorite(id)} className="btn roudned-2xl bg-main text-white hover:bg-header my-auto">Add/remove to favorites</button>
    );
};

export default ToggleFavorites;
