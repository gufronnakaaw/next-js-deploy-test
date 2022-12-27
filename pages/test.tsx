import { GetServerSideProps } from 'next';
import { useEffect } from 'react';

type Params = {
  hostname: string;
};

export default function test({ hostname }: Params) {
  useEffect(() => {
    console.log(window.isSecureContext);
  }, []);
  return (
    <div>
      <p>deploy testing success</p>
      <p>your hostname is {hostname}</p>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  return {
    props: {
      hostname: req.headers.host,
    },
  };
};
