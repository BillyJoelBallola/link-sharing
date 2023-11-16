import LinksPreview from '../components/LinksPreview';

const Preview = () => {
  return (
    <div className='relative w-full h-[600px] overflow-hidden'>
      <div className='bg-violet-500 mt-4 h-[250px] rounded-lg w-full' />
      <div className='absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2'>
        <LinksPreview />
      </div>
    </div>
  )
}

export default Preview