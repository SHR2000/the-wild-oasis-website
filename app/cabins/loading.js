import Spinner from "@/app/_components/Spinner";

export default function Loader() {
  return (
    <div className="grid items-center justify-center">
      <Spinner />
      <p className="text-xl text-primary-50">Loading cabin data...</p>
    </div>
  );
}