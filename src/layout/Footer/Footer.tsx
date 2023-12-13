export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="p-4 text-center">
      <p>&copy; {currentYear} Ghosts Cloak. All rights reserved.</p>
    </footer>
  );
};
