import React from 'react';
import BootstrapPagination from './BootstrapPagination';
import TailwindButton from './TailwindButton';
import MessageIcon from './MessageIcon';

function App() {
  return (
    <>
      <div className="flex flex-col items-center gap-10 p-20 bg-indigo-50 rounded-2xl ">
        <h1 className="text-3xl font-bold">My Bootstrap Framework</h1>
        <BootstrapPagination />

        <h1 className="text-3xl font-bold mt-10">My Tailwind Framework</h1>
        <TailwindButton />

        <h1 className='group-hover:underline'>My Semantic UI Framework</h1>
        <div className="mt-6 w-full max-w-md">
          <MessageIcon />
        </div>
      </div>
    </>
  );
} 

export default App;
