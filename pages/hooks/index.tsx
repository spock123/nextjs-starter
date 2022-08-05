import Link from 'next/link';

const Hooks = () => {
  return (
    <>
      <div className="container">
        <h1 className="text-3xl font-bold  my-6">Hooks</h1>

        <ul>
          <li>
            <Link href="/hooks/use-state">
              <a>useState</a>
            </Link>
          </li>
          <li>
            <Link href="/hooks/use-reducer">
              <a>useReducer</a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Hooks;
