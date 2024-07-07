import React from 'react';

export default function Home() {
  return (
    <div className='px-4 py-12 max-w-2xl mx-auto'>
      <h1 className='text-3xl font-bold  mb-4 text-slate-800'>
        Welcome to my Auth App!
      </h1>
      <p className='mb-4 text-slate-700'>
      This web application is developed using the MERN stack, which comprises MongoDB,
      Express, React, and Node.js. It features user authentication capabilities,
      enabling users to register, log in, and log out. Additionally, it restricts
      access to certain routes, ensuring that only authenticated users can access them
      </p>
      <p className='mb-4 text-slate-700'>
      The application's front-end is developed using React and utilizes React Router for 
      client-side navigation. The back-end is constructed with Node.js and Express, while
       MongoDB serves as the database. Authentication is managed through JSON Web Tokens (JWT).
      </p>
      <p className='mb-4 text-slate-700'>
        This application is intended as a starting point for building full-stack
        web applications with authentication using the MERN stack.
      </p>
    </div>
  );
}