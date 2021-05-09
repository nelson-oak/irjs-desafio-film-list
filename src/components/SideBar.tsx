import { useState } from "react";
import { Button } from "./Button";

interface SideBarProps {
  selectedGenreId: number,
  handleClickButton: (id: number) => void,
  genres: Array<{
    id: number
    title: string
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family'
  }>
}

export function SideBar({ selectedGenreId, handleClickButton, genres }: SideBarProps) { return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}