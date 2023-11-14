import { ArrowRightIcon } from '@radix-ui/react-icons';
import CardCategories from './CardCategories';


const CategoriesGrid = () => {
    return (
        <>
            <div className='flex flex-col md:flex-row items-start md:items-center justify-between mb-5'>
                <h2 className='font-bold text-2xl md:text-4xl'><span className='text-blue-600'>Outstanding</span> Categories</h2>
                <a className='mt-2 md:mt-0 font-medium text-xs md:text-sm flex items-center gap-2 hover:text-blue-500' href="/">See More<ArrowRightIcon /></a>
            </div>
            <div className="relative grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-10">
                <CardCategories />
                <CardCategories />
                <CardCategories />
                <CardCategories />
                <CardCategories />
                <CardCategories />
                <CardCategories />
                <CardCategories />
                <CardCategories />
            </div>
        </>
    );
};

export default CategoriesGrid;
