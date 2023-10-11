import React from "react";

function FavoritesPage({ favorites }) {
  return (
    <div className="favorites-page">
      <h2>Your Favorites</h2>
      {favorites.length === 0 ? (
        <p>You haven't added any favorites yet.</p>
      ) : (
        <div className="favorite-cards">
          {favorites.map((favorite) => (
            <div key={favorite.id} className="favorite-card">
              <img src={favorite.Images} alt={favorite.Name} />
              <p>{favorite.Name}</p>
              {/* You can add a remove from favorites button here */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoritesPage;
