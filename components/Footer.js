export default function Footer() {
  return (
    <footer className="absolute bottom-0 left-[50%] translate-x-[-50%] whitespace-nowrap p-6 text-gray-600 text-sm">
      <p>Copyright &copy; {new Date().getFullYear()} Kate Andreieva</p>
    </footer>
  );
}
