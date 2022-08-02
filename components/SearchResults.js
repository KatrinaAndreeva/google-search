import Parser from 'html-react-parser';

export default function SearchResults({ results }) {
  return (
    <div className="w-full px-3 mx-auto sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="mt-3 mb-5 text-sm text-gray-600">
        About {results.searchInformation.formattedTotalResults} results (
        {results.searchInformation.formattedSearchTime}) seconds
      </p>

      {results.items.map((result) => (
        <div className="max-w-xl mb-8" key={result.link}>
          <div className="group">
            <a className="text-sm truncate" href={result.link}>
              {result.formattedUrl}
            </a>
            <a
              className="group-hover:underline decoration-blue-800"
              href={result.link}
            >
              <h2 className="text-xl font-medium text-blue-800 truncate">
                {result.title}
              </h2>
            </a>
          </div>
          <p className="text-gray-600">{Parser(result.htmlSnippet)}</p>
        </div>
      ))}
    </div>
  );
}
