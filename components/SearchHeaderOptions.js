import SearchHeaderOption from './SearchHeaderOption';
import { SearchIcon, PhotographIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';

export default function SearchHeaderOptions() {
  const router = useRouter();
  return (
    <div className="flex justify-center w-full space-x-8 text-sm text-gray-700 border-b select-none lg:pl-52 lg:justify-start">
      <SearchHeaderOption
        title="All"
        Icon={SearchIcon}
        selected={router.query.searchType === '' || !router.query.searchType}
      />
      <SearchHeaderOption
        title="Images"
        Icon={PhotographIcon}
        selected={router.query.searchType === 'image'}
      />
    </div>
  );
}
