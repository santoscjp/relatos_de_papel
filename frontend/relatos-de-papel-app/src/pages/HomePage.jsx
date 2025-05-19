import NavBarApp from '../components/Navbar/Navbar';
import HeroCarousel from '../components/HeroCarousel/HeroCarousel';
import BookGrid from '../components/BookgGrid/BookGrid';

export default function HomePage() {
  return (
    <>
      <NavBarApp />
      <HeroCarousel />
      <BookGrid />
    </>
  );
}