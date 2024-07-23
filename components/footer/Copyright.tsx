'use client';

import { useState, useEffect } from 'react';

function Copyright() {
  const [year, setYear] = useState(2024);

  useEffect(() => {
    const currentDate = new Date().getFullYear();
    setYear(currentDate);
  }, []);
  return (
    <div className="bg-slate-950 py-8 text-center">
      © {year} Bartłomiej Brychcy
    </div>
  );
}

export default Copyright;
