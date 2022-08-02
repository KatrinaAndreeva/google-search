import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function PaginationButtons() {
  const router = useRouter();
  const startIndex = Number(router.query.start) || 1;
  return (
    <div className="flex justify-between pb-4 text-blue-700 px-9 sm:justify-start sm:space-x-44 sm:px-0">
      {startIndex > 10 && (
        <Link
          href={`/search?term=${router.query.term}&searchType=${
            router.query.searchType
          }&start=${startIndex - 10}`}
        >
          <div className="flex flex-col items-center cursor-pointer hover:underline">
            <ChevronLeftIcon className="h-5" />
            <p>Previous</p>
          </div>
        </Link>
      )}

      {startIndex < 90 && (
        <Link
          href={`/search?term=${router.query.term}&searchType=${
            router.query.searchType
          }&start=${startIndex + 10}`}
        >
          <div className="flex flex-col items-center cursor-pointer hover:underline">
            <ChevronRightIcon className="h-5" />
            <p>Next</p>
          </div>
        </Link>
      )}
    </div>
  );
}
