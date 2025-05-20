export default function Error({ error }: { error: Error }) {
  return (
    <div className="text-center text-red-600 mt-10">
      <h2 className="text-xl font-bold">خطا!</h2>
      <p>{error.message}</p>
    </div>
  );
}