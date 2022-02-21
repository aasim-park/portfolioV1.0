import Link from "next/link";

const Error = () => {
  return (
    <div>
      <p>Ooooopss.....</p>
      <p>That Page does`t exits</p>
      <p>
        {" "}
        Go back to home page{" "}
        <Link href="/">
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default Error;
