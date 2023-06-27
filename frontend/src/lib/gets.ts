export async function getStaticProps() {
  const res = await fetch("http://localhost:3333/category/product", {
    headers: {
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTG9sYSIsImVtYWlsIjoibG9sYUB0ZXN0ZS5jb20iLCJpYXQiOjE2ODc4NzU1MDMsImV4cCI6MTY5MDQ2NzUwMywic3ViIjoiNTdhYmVhMmUtMDgwMy00MDZlLWJiZTItZTRkMDE4YjFlMGFlIn0.vnR4OCAQK5OAZY6IKDHFjndlQ_sdciVygGL-7QoTkpU",
    },
  });
  const data = await res.json();
  return { props: { data } };
}
