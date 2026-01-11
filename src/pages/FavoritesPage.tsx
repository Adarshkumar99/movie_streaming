import React from 'react'
import MovieRow from '../components/MovieRow'
import { useFavourites } from '../context/FavouritesContext'

const FavoritesPage = () => {
	const { favourites } = useFavourites();
	return (
		<>

			<div className="min-h-screen bg-black pt-24">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h1 className="text-3xl font-bold mb-8">My Favorites</h1>

					{favourites.length === 0 ? (
						<p className="text-gray-400 text-center py-12">
							You haven't added any movies to your favorites yet.
						</p>
					) : (<MovieRow title="" movies={favourites} mediaType="movie" />

					)}
				</div>
			</div>
		</>
	)
}

export default FavoritesPage