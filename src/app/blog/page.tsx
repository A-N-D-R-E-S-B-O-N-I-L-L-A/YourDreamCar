import { BlogArticle } from '@/components/BlogArticle'

// fonts
import { Josefin_Sans } from '@next/font/google'
const josefin = Josefin_Sans({ subsets: ['latin'], weight: '400' })

const BlogHome = () => {
  return (
    <main className={`${josefin.className} md:px-[25%] flex flex-col bg-black text-white text-opacity-85 md:text-xl px-10 text-center h-full`}>
      
      <h2 className='pt-48 pb-12 text-xl font-bold underline decoration-[#18debe] underline-offset-8'>LASTEST POSTS</h2>

      <BlogArticle title='Top Car Wrap Trends' 
                   img='/bmw-wrapped-min.png' 
                   date='14/07/2023' 
                   link='/blog/top-car-wrap-trends' 
       />

      <BlogArticle title='Advantages of Wraps: Why Wrapping is Superior to Paint' 
                   img='/paintig-vs-wrap-min.png' 
                   date='12/07/2023' 
                   link='/blog/advantages-of-wraps' 
       />

    </main>
  )
}

export default BlogHome
