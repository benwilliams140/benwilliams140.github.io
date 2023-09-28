import clsx from 'clsx';
import { ProjectCard } from '../../components';

export default function Projects() {
  return (
    <div
      className={clsx(
        'page',
        'grid grid-rows-3 grid-cols-3 grid-gap-4',
        'p-4 pr-16',
      )}
    >
      <ProjectCard
        label="Personal Website"
        link="https://github.com/benwilliams140/benwilliams140.github.io"
      >
        A personal portfolio that showcases my skillset and projects. Written in
        React, styled with UnoCSS.
      </ProjectCard>
      <ProjectCard
        label="Procedural Terrain Generator"
        link="https://github.com/benwilliams140/procedural-terrain"
      >
        Procedural terrain generation using Perlin noise and OpenGL. Provides a
        GUI for users to edit the parameters of generation, including amplitude,
        lacunarity, number of octaves and chunks.
      </ProjectCard>
      <ProjectCard
        label="Planet Explorer"
        link="https://github.com/benwilliams140/comp3501-project"
      >
        Based on an alien planet, the player must explore the world, collect
        resources, and use the environment to their advantage to avoid and
        damage the aliens. Written in C++ with OpenGL.
      </ProjectCard>
      <ProjectCard
        label="Course Management System"
        link="https://github.com/CameronDickie/comp3004-team6"
      >
        A full-stack web application for managing courses at a school. Admins
        can create accounts and courses, students can register for courses and
        view grades, and professors can see registered students and submit
        grades. Written with a React frontend and SpringBoot backend.
      </ProjectCard>
      <ProjectCard
        label="Library Management System"
        link="https://github.com/benwilliams140/look_inna_book"
      >
        Full-stack application written in JavaScript, using React, express, and
        PostgreSQL. Allows for managing an online bookstore - admin can
        add/remove books and authors, users can browse and purchase available
        books, stock will be tracked automatically.
      </ProjectCard>
      <ProjectCard
        label="Bullets Everywhere"
        link="https://github.com/benwilliams140/Bullets-Everywhere"
      >
        A top-down, bullet-hell style game written in C++ using SFML.
      </ProjectCard>
      <ProjectCard
        label="2D Marching Squares"
        link="https://github.com/benwilliams140/2D-Marching-Squares"
      >
        2D visualization of the marching squares terrain generation algorithm,
        written in C++ using SFML.
      </ProjectCard>
      <ProjectCard
        label="Asteroids"
        link="https://github.com/benwilliams140/asteroids"
      >
        Remake of the classic arcade-style game Asteroids, written in Python.
      </ProjectCard>
      <ProjectCard
        label="Anonica"
        link="https://github.com/benwilliams140/anonica"
      >
        An attraction-based game written in Python. The user must collect
        different bits by "turning on" the corresponding gigabyte, careful not
        to attract bits to the wrong gigabyte!
      </ProjectCard>
    </div>
  );
}
