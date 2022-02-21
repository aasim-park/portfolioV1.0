const Footer = () => {
  return (
    <footer className="flex flex-col border-y-4">
      {/* Copyright */}
      <div className="flex justify-center p-2 m-2">
        <p>Copyright &#169; 2022 </p>
      </div>
      {/* Icons */}
      <div className="flex justify-center p-3 gap-7">
        <a>Github</a>
        <a>Intagram</a>
        <a>Linkdein</a>
      </div>
    </footer>
  );
};

export default Footer;
