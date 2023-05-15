import type { NextPage } from 'next';
import { getGallery } from './api/gallery';
import { Gallery } from '../../types';
import { useQuery } from '@tanstack/react-query';
import NewSlider from '../../components/NewSlider'

type Props = {
  gallery: Gallery[];
};

const Home: NextPage = () => {

  const { data, error, isLoading, status } = useQuery<Props>({
    queryKey: ['Gallery'],
    queryFn: getGallery,
    refetchInterval: 60000,
  })


  if (error) return <main className='flex min-h-screen flex-col items-center gap-24'><div>App Failed!</div></main>

  return (
    <main className='flex justify-center items-center overflow-hidden max-sm:p-8'>
        <NewSlider />
      {/* <div className='flex gap-4 flex-col justify-center items-center'>
        {data?.gallery.map((item) => (
          <div className='' key={item._id}>
            <h2 className='text-red-400'>{item.title}</h2>
            <p>{item.description}</p>
            <p>{item.publishedAt}</p>
            <Image
              src={item.image.url}
              alt={item.title}
              width={720}
              height={580}
              priority
              sizes="(max-width: 640px) 100vw,
              (max-width: 1280px) 50vw,
              (max-width: 1536px) 33vw,
              25vw"
            />
          </div>
        ))}
      </div> */}
    </main>
  )
}

export default Home;