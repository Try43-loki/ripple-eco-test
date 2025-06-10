export default async function headerToken() {
  // getServerSession is used to get the token that provided from the api
  const session = await auth();
  return {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Authorization: `Bearer ${session?.data?.token}`,
  };
}
