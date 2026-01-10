'use client'
import Image from 'next/image';
import Clean from "@/public/assets/clean.png"
import Link from 'next/link';

function ServiceCard({ posts}) {
    if (posts?.length === 0) {
        return (
            <div>No Post Available</div>
        )
    }
    // console.log(posts)
    return (
        <>
            {posts?.map((service) => {
                const bgImage =
                    service?._embedded?.['wp:featuredmedia']?.[0]?.source_url ?? Clean
                const altText = service.title.rendered ?? null
                return (
                    <div key={service.id}>
                        < Link href={`/posts/${service.slug}`} >
                            <div className='flex flex-col gap-5 h-90 w-82 relative text-white'>
                                <div className='absolute inset-0 -z-10 '>
                                    <Image src={bgImage} alt={altText} width={200} height={200} className='w-84 rounded bg-cover bg-center' />
                                </div>
                                <div className='relative ml-10 space-y-3 mt-10'>
                                    <h3 className='text-[35.27px] font-semibold' dangerouslySetInnerHTML={{ __html: service.title.rendered }}></h3>
                                    <p className='text-[21.29px] w-1/2' dangerouslySetInnerHTML={{ __html: service.content.rendered }}></p>
                                    <div className='flex flex-col'>
                                        <button className='w-45 text-black p-2 text-[21.29px] rounded-lg bg-[#FFD9D9]'>Schedule Now</button>
                                        <strong className='font-light pt-2 flex text-[15px]'>
                                            Starts at
                                            £<span dangerouslySetInnerHTML={{ __html: service.excerpt.rendered }}></span>/hr
                                        </strong>
                                    </div>
                                </div>
                            </div>
                        </ Link>
                    </div>
                )
            }
            )}
        </>
    )
}

export default ServiceCard