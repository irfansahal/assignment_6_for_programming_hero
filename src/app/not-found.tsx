import Link from 'next/link'
 
export default function NotFound() {
  return (<div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold">404</h1>

      <h2 className="text-2xl mt-4">
        Workout Not Found
      </h2>

      <p className="mt-2">
        The workout you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="btn btn-primary bg-[#ccff00] text-black mt-6"
      >
        Go Home
      </Link>
    </div>)
}
