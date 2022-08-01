import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid';
import User from './User';

export default function SearchHeader() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex items-center w-full p-6">
        <Image
          onClick={() => router.push('/')}
          width="120"
          objectFit="contain"
          height="40"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
          alt="google logo"
          className="cursor-pointer"
        />

        <form className="flex items-center flex-grow max-w-3xl px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-md">
          <input
            className="w-full focus:outline-none"
            type="text"
            defaultValue={router.query.term}
            ref={searchInputRef}
          />
          <XIcon
            className="text-gray-500 cursor-pointer h-7 sm:mr-3"
            onClick={() => (searchInputRef.current.value = '')}
          />
          <MicrophoneIcon className="hidden h-6 pl-4 mr-3 text-blue-500 border-l-2 border-gray-300 sm:inline-flex" />
          <SearchIcon className="hidden h-6 text-blue-500 sm:inline-flex" />
        </form>
        <User className="ml-auto whitespace-nowrap" />
      </div>
    </header>
  );
}
