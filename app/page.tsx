import Hero from '@/components/Hero';
import HomeProperties from '@/components/HomeProperties';
import Infoboxes from '@/components/Infoboxes';
import connectDB from '@/config/database';

export default function Home() {
  connectDB();
  return (
    <>
      <Hero />
      <Infoboxes />
      <HomeProperties />
    </>
  );
}
