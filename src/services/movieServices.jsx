export const getAllMovies = async () => {
  try {
    const response = await fetch("https://api.tvmaze.com/shows");

    if (!response.ok) {
      throw new Error(
        `Error status: ${response.status} message: ${response.message}`,
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error while fetching movies", error);
  }
};



export const getMoviesBySearch = async (searchQuery) => {
  try {
    const response = await fetch(
      `https://api.tvmaze.com/search/shows?q=${searchQuery}`,
    );

    if (!response.ok) {
      throw new Error(
        `Error! status: ${response.status} message: ${response.message}`,
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error while Searching movies", error);
  }
};
