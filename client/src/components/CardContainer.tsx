import { Card } from '.';

interface CardContainerProps {
  title: string;
}

const CardContainer = ({ title }: CardContainerProps) => {
  return (
    <section className='flex flex-col min-w-[300px] bg-slate-100 py-2'>
      <div className=' flex justify-between items-center px-3'>
        <div className=' flex gap-2 items-center'>
          <div
            className={`w-4 h-4 rounded-l-[8px] ${
              title === 'Incomplete'
                ? 'bg-red-500'
                : title === 'Doing'
                ? 'bg-yellow-300'
                : title === 'To Do'
                ? 'bg-blue-400'
                : 'hidden'
            }`}
          />

          <h1 className='font-medium'>{title}</h1>
        </div>
        <span className=' bg-slate-200 px-2 font-bold text-sm'>0</span>
      </div>

      <div className=' flex flex-col gap-4 overflow-y-scroll mt-4 px-2'>
        {[0, 1, 2, 3, 4, 5, 6].map((_, i) => {
          return <Card key={i} />;
        })}
      </div>
    </section>
  );
};

export default CardContainer;
