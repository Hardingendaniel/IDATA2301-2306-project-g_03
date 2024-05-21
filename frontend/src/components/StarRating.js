// StarRating.jsx
import React from 'react';
import FilledStarIcon from './FilledStarIcon';
import EmptyStarIcon from './EmptyStarIcon';

const StarRating = ({ rating, maxRating = 5 }) => {
    const filledStars = Math.min(rating, maxRating);
    const emptyStars = maxRating - filledStars;

    return (
        <div className="flex py-2 space-x-1">
            {Array.from({ length: filledStars }, (_, index) => (
                <span key={`filled-${index}`}><FilledStarIcon /></span>
            ))}
            {Array.from({ length: emptyStars }, (_, index) => (
                <span key={`empty-${index}`}><EmptyStarIcon /></span>
            ))}
        </div>
    );
};

export default StarRating;
