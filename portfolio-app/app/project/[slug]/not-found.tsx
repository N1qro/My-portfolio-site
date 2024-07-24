import Link from "next/link";
import LinkBack from "./linkBack";

function NotFound() {
  return (
    <>
      <h2 className="mt-3">Проект не найден</h2>
      <Link href="/#projects" scroll={true}>
        {"<-"} Посмотреть варианты
      </Link>
    </>
  );
}

export default NotFound;
