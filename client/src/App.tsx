import { CardContainer } from './components';

function App() {
  return (
    <main className='  p-4 h-screen flex overflow-x-scroll overflow-y-hidden gap-5'>
      {[0, 1, 2, 3, 4, 5, 6, 7].map((n) => {
        return (
          <CardContainer
            key={n}
            title={
              n === 0
                ? 'Incomplete'
                : n === 1
                ? 'To Do'
                : n === 2
                ? 'Doing'
                : n === 3
                ? 'Under Review'
                : n === 4
                ? 'Completed'
                : 'Others'
            }
          />
        );
      })}
    </main>
  );
}

export default App;
