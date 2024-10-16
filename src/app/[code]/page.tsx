import { RedirectUrl } from "../actions";
import NotFound from "../not-found";

export default async function code({
  params: { code },
}: {
  params: { code: string };
}) {
  console.log(code , "code");

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL}/api/decode-short-url/${code}`,
      {
        next: { revalidate: 10 },
      }
    );

    // console.log({ res }, "res");

    // const responseData = await res.json();
    // console.log({ responseData }, "Decoded URL Data");
    // console.log("outer");

    // const decodedUrl = responseData?.data?.url;
    // console.log({ decodedUrl }, "decodeurl");
    // console.log("inner");

    // if (decodedUrl) {
    //   console.log("Decoded URL:", decodedUrl);
    //   console.log("decodedUrl inner");

    //   return RedirectUrl(decodedUrl);
    // } else {
    //   console.log("Not found");
    //   return (
    //     <div>
    //       <NotFound />
    //     </div>
    //   );
    // }
  } catch (e) {
    console.error("Error while decoding the short URL:", e);
    return <div>Error occurred while decoding the URL</div>;
  }
}
