import ExpectCard from './ExpectCard';

const ExpectGrid = () => {
    return (
        <div className="bg-gray-100 py-16 text-center">
            <h2 className='font-bold text-2xl md:text-4xl'>What To Expect From A <span className='text-blue-600'>Eduma Courses?</span></h2>
            <div className="px-24 relative grid grid-cols-1 md:grid-cols-3 gap-5">
                <ExpectCard />
                <ExpectCard />
                <ExpectCard />
                <ExpectCard />
                <ExpectCard />
                <ExpectCard />
            </div>
        </div>
    );
};

export default ExpectGrid;
