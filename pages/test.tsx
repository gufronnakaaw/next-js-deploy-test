import { GetServerSideProps } from 'next';

type Params = {
  hostname: string;
};

export default function test({ hostname }: Params) {
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
