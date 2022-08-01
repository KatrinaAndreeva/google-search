import React from 'react';
import Header from '../../components/Header';
import { getProviders, signIn } from 'next-auth/react';

export default function signin({ providers }) {
  return (
    <>
      <Header />
      <div className="mt-40">
        {Object.values(providers).map((provider) => (
          <div key={provider.name} className="flex flex-col items-center">
            <img
              className="object-cover w-52"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
              alt="google-logo"
            />
            <p className="my-10 text-sm italic text-center">
              This website is created for learning purposes
            </p>
            <button
              className="p-3 text-white bg-red-400 rounded-lg hover:bg-red-500"
              onClick={() => signIn(provider.id, { callbackUrl: '/' })}
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
