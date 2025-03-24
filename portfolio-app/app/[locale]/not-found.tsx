import Link from "next/link";

function NotFound() {
  return (
    <>
      <h2 className="mt-3">Ой, как вы сюда попали?</h2>
      <Link href="/" autoFocus>
        {"->"}Вам сюда {"<-"}
      </Link>
    </>
  );
}

export default NotFound;
