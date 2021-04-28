import { Button } from "./Button";
import "../styles/sidebar.scss";
import { useMovies } from "../MoviesContext";

export function SideBar() {
  const { genres, selectedGenreId, handleClickButton } = useMovies();
  return (
    <nav className="sidebar">
      <span>
        Watch
        <p>Me</p>
      </span>
      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            selected={selectedGenreId === genre.id}
            onClick={() => handleClickButton(genre.id)}
          />
        ))}
      </div>
    </nav>
  );
}
