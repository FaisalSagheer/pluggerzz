
import { getServices } from '@/lib/queries'
import ServiceCard from './ServiceCard'

export default async function Services() {
    const { posts } = await getServices()
    return (
        <>
            <div>
                <div className="text-center mt-10 flex flex-col justify-center items-center">
                    <h1 className="text-3xl lg:text-5xl font-bold tracking-tight text-balance text-black sm:text-[58.92px]">
                        Our Services
                    </h1>
                    <p className="lg:w-1/2 mt-8 lg:text-lg font-medium text-pretty text-black sm:text-xl/8">
                        Pluggerzz services may vary by city. Some features shown here might not be available in your area yet.
                    </p>
                </div>
                <div className='pl-10 lg:pl-50 py-20 flex gap-4 overflow-hidden'>
                    <ServiceCard posts={posts} />
                </div>
            </div>
        </>
    )
}
