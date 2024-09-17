'use client';

import { useState, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';

function Copyright() {
  const [year, setYear] = useState(2024);

  useEffect(() => {
    const currentDate = new Date().getFullYear();
    setYear(currentDate);
  }, []);
  return (
    <div className="bg-slate-950 py-8 text-center">
      <p className="mb-3">© {year} Bartłomiej Brychcy</p>
      <p>
        <a
          className="text-3xl inline-block hover:text-slate-400"
          href="https://github.com/GHBartekB"
          aria-label="github"
        >
          <FaGithub />
        </a>
      </p>
    </div>
  );
}

export default Copyright;
