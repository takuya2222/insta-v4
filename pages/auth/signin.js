import { getProviders, signIn } from "next-auth";

export default function signin({ providers }) {
  return <div>signin page</div>;
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}